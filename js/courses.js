// js/courses.js — Baner, mål og kortfunktioner

import { getDB } from './firebase-instance.js';
import {
  collection, doc, addDoc, getDoc, getDocs, setDoc,
  updateDoc, deleteDoc, serverTimestamp, arrayUnion, arrayRemove, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getStorage, ref, uploadString, getDownloadURL, deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

/** Load all courses */
export async function loadCourses() {
  try {
    const db = getDB();
    const snap = await getDocs(collection(db, 'kurser'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error('loadCourses error:', err);
    return [];
  }
}

/** Load a single course */
export async function loadCourse(courseId) {
  try {
    const db = getDB();
    const snap = await getDoc(doc(db, 'kurser', courseId));
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  } catch (err) {
    console.error('loadCourse error:', err);
    return null;
  }
}

/** Create a new course */
export async function createCourse(name, numTargets, location) {
  try {
    const db = getDB();
    const targets = Array.from({ length: numTargets }, (_, i) => ({
      number: i + 1,
      name: '',
      emoji: '',
      imageUrl: '',
      distance: null,
      gps: null,
    }));
    const ref = await addDoc(collection(db, 'kurser'), {
      name,
      numTargets,
      location: location || '',
      targets,
      created: serverTimestamp(),
      visits: []
    });
    return ref.id;
  } catch (err) {
    console.error('createCourse error:', err);
    throw err;
  }
}

/** Update course metadata */
export async function updateCourse(courseId, data) {
  try {
    const db = getDB();
    await updateDoc(doc(db, 'kurser', courseId), data);
  } catch (err) {
    console.error('updateCourse error:', err);
    throw err;
  }
}

/** Update a single target within a course */
export async function updateTarget(courseId, targetIndex, targetData) {
  try {
    const db = getDB();
    const courseRef = doc(db, 'kurser', courseId);
    const snap = await getDoc(courseRef);
    if (!snap.exists()) throw new Error('Course not found');
    const course = snap.data();
    const targets = [...(course.targets || [])];
    while (targets.length <= targetIndex) targets.push({});
    targets[targetIndex] = { ...targets[targetIndex], ...targetData };
    await updateDoc(courseRef, { targets });
  } catch (err) {
    console.error('updateTarget error:', err);
    throw err;
  }
}

/** Upload target image (base64 JPEG) to Firebase Storage */
export async function uploadTargetImage(courseId, targetIndex, base64Data) {
  try {
    const storage = getStorage();
    const imageRef = ref(storage, `courses/${courseId}/target_${targetIndex}.jpg`);
    await uploadString(imageRef, base64Data, 'base64', { contentType: 'image/jpeg' });
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (err) {
    console.error('uploadTargetImage error:', err);
    throw err;
  }
}

/** Add a visit reference to a course */
export async function addCourseVisit(courseId, visitData) {
  try {
    const db = getDB();
    const courseRef = doc(db, 'kurser', courseId);
    const snap = await getDoc(courseRef);
    if (!snap.exists()) return;
    const course = snap.data();
    const visits = [...(course.visits || [])];
    visits.unshift(visitData);
    // Keep only last 50 visits
    await updateDoc(courseRef, { visits: visits.slice(0, 50) });
  } catch (err) {
    console.error('addCourseVisit error:', err);
  }
}

/** Remove a visit from course */
export async function removeCourseVisit(courseId, visitIndex) {
  try {
    const db = getDB();
    const courseRef = doc(db, 'kurser', courseId);
    const snap = await getDoc(courseRef);
    if (!snap.exists()) return;
    const course = snap.data();
    const visits = [...(course.visits || [])];
    visits.splice(visitIndex, 1);
    await updateDoc(courseRef, { visits });
  } catch (err) {
    console.error('removeCourseVisit error:', err);
  }
}

/** Delete a course and its images */
export async function deleteCourse(courseId) {
  try {
    const db = getDB();
    const storage = getStorage();
    const snap = await getDoc(doc(db, 'kurser', courseId));
    if (snap.exists()) {
      const course = snap.data();
      const targets = course.targets || [];
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].imageUrl) {
          try {
            const imgRef = ref(storage, `courses/${courseId}/target_${i}.jpg`);
            await deleteObject(imgRef);
          } catch (e) { /* ignore missing files */ }
        }
      }
    }
    await deleteDoc(doc(db, 'kurser', courseId));
  } catch (err) {
    console.error('deleteCourse error:', err);
    throw err;
  }
}

/** Compress image to 400px / 65% JPEG, returns base64 */
export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 400;
        let w = img.width, h = img.height;
        if (w > h) { if (w > MAX) { h = h * MAX / w; w = MAX; } }
        else { if (h > MAX) { w = w * MAX / h; h = MAX; } }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const data = canvas.toDataURL('image/jpeg', 0.65).split(',')[1];
        resolve(data);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
