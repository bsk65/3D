// js/courses.js — Baner, mål, billeder og besøg

async function loadCourses() {
  try {
    const snap = await db.collection('kurser').get();
    return snap.docs.map(d => {
      const data = d.data();
      return {
        id:         d.id,
        name:       data.name       || data.yam         || '—',
        numTargets: data.numTargets || data.antalMål     || 24,
        location:   data.location   || data.beliggenhed  || '',
        targets:    data.targets    || data.mål          || [],
        visits:     data.visits     || data.besøg        || [],
        ...data
      };
    });
  } catch (err) { console.error('loadCourses:', err); return []; }
}

async function loadCourse(courseId) {
  try {
    const snap = await db.collection('kurser').doc(courseId).get();
    if (!snap.exists) return null;
    const data = snap.data();
    return {
      id:         snap.id,
      name:       data.name       || data.yam         || '—',
      numTargets: data.numTargets || data.antalMål     || 24,
      location:   data.location   || data.beliggenhed  || '',
      targets:    data.targets    || data.mål          || [],
      visits:     data.visits     || data.besøg        || [],
      ...data
    };
  } catch (err) { console.error('loadCourse:', err); return null; }
}

async function createCourse(name, numTargets, location) {
  try {
    const targets = Array.from({ length: numTargets }, (_, i) => ({
      number: i + 1, name: '', emoji: '', imageUrl: '', distance: null, gps: null
    }));
    const ref = await db.collection('kurser').add({
      yam: name, name,
      antalMål: numTargets, numTargets,
      beliggenhed: location || '', location: location || '',
      mål: targets, targets,
      skabt: firebase.firestore.FieldValue.serverTimestamp(),
      visits: [], besøg: []
    });
    return ref.id;
  } catch (err) { console.error('createCourse:', err); throw err; }
}

async function updateCourse(courseId, data) {
  try {
    // Map nye feltnavne til også at opdatere de gamle
    const update = { ...data };
    if (data.name)       update.yam         = data.name;
    if (data.location)   update.beliggenhed  = data.location;
    if (data.numTargets) update.antalMål     = data.numTargets;
    if (data.targets)    update.mål          = data.targets;
    await db.collection('kurser').doc(courseId).update(update);
  } catch (err) { console.error('updateCourse:', err); throw err; }
}

async function updateTarget(courseId, targetIndex, targetData) {
  try {
    const ref  = db.collection('kurser').doc(courseId);
    const snap = await ref.get();
    if (!snap.exists) throw new Error('Bane ikke fundet');
    const d = snap.data(); const targets = [...(d.targets || d.mål || [])];
    while (targets.length <= targetIndex) targets.push({});
    targets[targetIndex] = { ...targets[targetIndex], ...targetData };
    await ref.update({ targets, mål: targets });
  } catch (err) { console.error('updateTarget:', err); throw err; }
}

async function uploadTargetImage(courseId, targetIndex, base64Data) {
  try {
    const imgRef = storage.ref(`courses/${courseId}/target_${targetIndex}.jpg`);
    await imgRef.putString(base64Data, 'base64', { contentType: 'image/jpeg' });
    return await imgRef.getDownloadURL();
  } catch (err) { console.error('uploadTargetImage:', err); throw err; }
}

async function addCourseVisit(courseId, visitData) {
  try {
    const ref  = db.collection('kurser').doc(courseId);
    const snap = await ref.get();
    if (!snap.exists) return;
    const d2 = snap.data(); const visits = [visitData, ...(d2.visits || d2.besøg || [])].slice(0, 50);
    await ref.update({ visits, besøg: visits });
  } catch (err) { console.error('addCourseVisit:', err); }
}

async function removeCourseVisit(courseId, visitIndex) {
  try {
    const ref  = db.collection('kurser').doc(courseId);
    const snap = await ref.get();
    if (!snap.exists) return;
    const d3 = snap.data(); const visits = [...(d3.visits || d3.besøg || [])];
    visits.splice(visitIndex, 1);
    await ref.update({ visits, besøg: visits });
  } catch (err) { console.error('removeCourseVisit:', err); }
}

async function deleteCourse(courseId) {
  try {
    const snap = await db.collection('kurser').doc(courseId).get();
    if (snap.exists) {
      const targets = snap.data().targets || [];
      for (let i = 0; i < targets.length; i++) {
        if (targets[i].imageUrl) {
          try {
            await storage.ref(`courses/${courseId}/target_${i}.jpg`).delete();
          } catch (e) { /* ignorer manglende filer */ }
        }
      }
    }
    await db.collection('kurser').doc(courseId).delete();
  } catch (err) { console.error('deleteCourse:', err); throw err; }
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const MAX = 400;
        let w = img.width, h = img.height;
        if (w > h) { if (w > MAX) { h = h * MAX / w; w = MAX; } }
        else       { if (h > MAX) { w = w * MAX / h; h = MAX; } }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.65).split(',')[1]);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
