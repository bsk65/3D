// js/friends.js — Venner og admin-håndtering

async function loadFriends(uid) {
  try {
    const snap = await db.collection('brugere').doc(uid).collection('venner').get();
    return snap.docs.map(d => {
      const data = d.data();
      return {
        id:      d.id,
        name:    data.name    || data.yam     || '—',
        email:   data.email   || data['e-mail'] || '',
        phone:   data.phone   || data.telefon  || '',
        club:    data.club    || data.klub     || '',
        bowType: data.bowType || data.bueType  || '',
        ...data
      };
    });
  } catch (err) { console.error('loadFriends:', err); return []; }
}

async function saveFriend(uid, data, friendId = null) {
  try {
    const col = db.collection('brugere').doc(uid).collection('venner');
    // Gem både nye og gamle feltnavne
    const saveData = {
      ...data,
      yam:      data.name,
      'e-mail': data.email,
      telefon:  data.phone,
      klub:     data.club,
      bueType:  data.bowType,
    };
    if (friendId) {
      await col.doc(friendId).set(saveData);
      return friendId;
    } else {
      const ref = await col.add(saveData);
      return ref.id;
    }
  } catch (err) { console.error('saveFriend:', err); throw err; }
}

async function deleteFriend(uid, friendId) {
  try {
    await db.collection('brugere').doc(uid).collection('venner').doc(friendId).delete();
  } catch (err) { console.error('deleteFriend:', err); throw err; }
}

async function checkIsAdmin(uid) {
  try {
    const snap = await db.collection('administratorer').doc(uid).get();
    return snap.exists;
  } catch (err) { console.error('isAdmin:', err); return false; }
}

async function addAdmin(uid, email) {
  try {
    await db.collection('administratorer').doc(uid).set({
      email, created: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) { console.error('addAdmin:', err); throw err; }
}

async function removeAdmin(uid) {
  try {
    await db.collection('administratorer').doc(uid).delete();
  } catch (err) { console.error('removeAdmin:', err); throw err; }
}

async function loadAllUsers() {
  try {
    const snap = await db.collection('brugere').get();
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (err) { console.error('loadAllUsers:', err); return []; }
}

async function findUserByEmail(email) {
  try {
    const snap = await db.collection('brugere').where('email', '==', email).get();
    if (snap.empty) return null;
    return { uid: snap.docs[0].id, ...snap.docs[0].data() };
  } catch (err) { console.error('findUserByEmail:', err); return null; }
}
