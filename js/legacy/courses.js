// js/courses.js
import { db, storage } from './firebase-instance.js'
import {
  collection, doc, addDoc, getDoc, getDocs,
  onSnapshot, updateDoc, deleteDoc, serverTimestamp
} from 'firebase/firestore'
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage'

export function subscribeCourses(callback) {
  return onSnapshot(collection(db, 'kurser'), snap => {
    const courses = snap.docs.map(d => {
      const data = d.data()
      return {
        id:         d.id,
        name:       data.name       || data.yam        || '—',
        numTargets: data.numTargets || data.antalMål    || 24,
        location:   data.location   || data.beliggenhed || '',
        targets:    data.targets    || data.mål         || [],
        visits:     data.visits     || data.besøg       || [],
      }
    })
    callback(courses)
  }, err => console.error('courses:', err))
}

export async function loadCourse(courseId) {
  try {
    const snap = await getDoc(doc(db, 'kurser', courseId))
    if (!snap.exists()) return null
    const data = snap.data()
    return {
      id:         snap.id,
      name:       data.name       || data.yam        || '—',
      numTargets: data.numTargets || data.antalMål    || 24,
      location:   data.location   || data.beliggenhed || '',
      targets:    data.targets    || data.mål         || [],
      visits:     data.visits     || data.besøg       || [],
    }
  } catch (err) { console.error(err); return null }
}

export async function createCourse(name, numTargets, location) {
  const targets = Array.from({ length: numTargets }, (_, i) => ({
    number: i + 1, name: '', emoji: '', imageUrl: '', distance: null, gps: null
  }))
  const ref2 = await addDoc(collection(db, 'kurser'), {
    name, yam: name,
    numTargets, antalMål: numTargets,
    location: location || '', beliggenhed: location || '',
    targets, mål: targets,
    created: serverTimestamp(), skabt: serverTimestamp(),
    visits: [], besøg: []
  })
  return ref2.id
}

export async function updateCourse(courseId, data) {
  const update = { ...data }
  if (data.name)     { update.yam = data.name }
  if (data.location) { update.beliggenhed = data.location }
  await updateDoc(doc(db, 'kurser', courseId), update)
}

export async function updateTarget(courseId, targetIndex, targetData) {
  const ref2 = doc(db, 'kurser', courseId)
  const snap = await getDoc(ref2)
  if (!snap.exists()) return
  const d = snap.data()
  const targets = [...(d.targets || d.mål || [])]
  while (targets.length <= targetIndex) targets.push({})
  targets[targetIndex] = { ...targets[targetIndex], ...targetData }
  await updateDoc(ref2, { targets, mål: targets })
}

export async function uploadTargetImage(courseId, targetIndex, base64Data) {
  const imgRef = ref(storage, `courses/${courseId}/target_${targetIndex}.jpg`)
  await uploadString(imgRef, base64Data, 'base64', { contentType: 'image/jpeg' })
  return await getDownloadURL(imgRef)
}

export async function addCourseVisit(courseId, visitData) {
  try {
    const ref2 = doc(db, 'kurser', courseId)
    const snap = await getDoc(ref2)
    if (!snap.exists()) return
    const d = snap.data()
    const visits = [visitData, ...(d.visits || d.besøg || [])].slice(0, 50)
    await updateDoc(ref2, { visits, besøg: visits })
  } catch (err) { console.error(err) }
}

export async function removeCourseVisit(courseId, visitIndex) {
  try {
    const ref2 = doc(db, 'kurser', courseId)
    const snap = await getDoc(ref2)
    if (!snap.exists()) return
    const d = snap.data()
    const visits = [...(d.visits || d.besøg || [])]
    visits.splice(visitIndex, 1)
    await updateDoc(ref2, { visits, besøg: visits })
  } catch (err) { console.error(err) }
}

export async function deleteCourse(courseId) {
  try {
    const snap = await getDoc(doc(db, 'kurser', courseId))
    if (snap.exists()) {
      const targets = snap.data().targets || snap.data().mål || []
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].imageUrl) {
          try { await deleteObject(ref(storage, `courses/${courseId}/target_${i}.jpg`)) }
          catch (e) {}
        }
      }
    }
    await deleteDoc(doc(db, 'kurser', courseId))
  } catch (err) { console.error(err); throw err }
}

export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      const img = new Image()
      img.onload = () => {
        const MAX = 400
        let w = img.width, h = img.height
        if (w > h) { if (w > MAX) { h = h * MAX / w; w = MAX } }
        else       { if (h > MAX) { w = w * MAX / h; h = MAX } }
        const canvas = document.createElement('canvas')
        canvas.width = w; canvas.height = h
        canvas.getContext('2d').drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.65).split(',')[1])
      }
      img.onerror = reject
      img.src = e.target.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
