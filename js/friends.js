// js/friends.js — Venner og admin-håndtering

import { getDB } from './firebase-instance.js';
import {
  collection, doc, addDoc, getDocs, getDoc,
  setDoc, updateDoc, deleteDoc, query, orderBy, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/** Load user's friends */
export async function loadFriends(uid) {
  try {
    const db = getDB();
    const snap = await getDocs(collection(db, 'brugere', uid, 'friends'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error('loadFriends error:', err);
    return [];
  }
}

/** Add or update a friend */
export async function saveFriend(uid, friendData, friendId = null) {
  try {
    const db = getDB();
    const colRef = collection(db, 'brugere', uid, 'friends');
    if (friendId) {
      await setDoc(doc(db, 'brugere', uid, 'friends', friendId), friendData);
      return friendId;
    } else {
      const ref = await addDoc(colRef, friendData);
      return ref.id;
    }
  } catch (err) {
    console.error('saveFriend error:', err);
    throw err;
  }
}

/** Delete a friend */
export async function deleteFriend(uid, friendId) {
  try {
    const db = getDB();
    await deleteDoc(doc(db, 'brugere', uid, 'friends', friendId));
  } catch (err) {
    console.error('deleteFriend error:', err);
    throw err;
  }
}

/** Check if user is admin */
export async function isAdmin(uid) {
  try {
    const db = getDB();
    const snap = await getDoc(doc(db, 'administratorer', uid));
    return snap.exists();
  } catch (err) {
    console.error('isAdmin error:', err);
    return false;
  }
}

/** Load all admins */
export async function loadAdmins() {
  try {
    const db = getDB();
    const snap = await getDocs(collection(db, 'administratorer'));
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (err) {
    console.error('loadAdmins error:', err);
    return [];
  }
}

/** Add admin by uid */
export async function addAdmin(uid, email) {
  try {
    const db = getDB();
    await setDoc(doc(db, 'administratorer', uid), { email, created: serverTimestamp() });
  } catch (err) {
    console.error('addAdmin error:', err);
    throw err;
  }
}

/** Remove admin */
export async function removeAdmin(uid) {
  try {
    const db = getDB();
    await deleteDoc(doc(db, 'administratorer', uid));
  } catch (err) {
    console.error('removeAdmin error:', err);
    throw err;
  }
}

/** Load all users (admin only) */
export async function loadAllUsers() {
  try {
    const db = getDB();
    const snap = await getDocs(collection(db, 'brugere'));
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (err) {
    console.error('loadAllUsers error:', err);
    return [];
  }
}

/** Find user by email (for admin add) */
export async function findUserByEmail(email) {
  try {
    const db = getDB();
    const q = query(collection(db, 'brugere'), where('email', '==', email));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return { uid: snap.docs[0].id, ...snap.docs[0].data() };
  } catch (err) {
    console.error('findUserByEmail error:', err);
    return null;
  }
}
