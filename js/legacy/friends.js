// js/friends.js — Venner er KUN lokale (localStorage)

const LS_KEY = 'archery_v5'
const LS_KEY_OLD = 'archery_v4'

export function loadLocalData() {
  try {
    const newData = JSON.parse(localStorage.getItem(LS_KEY) || 'null')
    if (newData) return newData
    // Migrer fra gammel app
    const old = JSON.parse(localStorage.getItem(LS_KEY_OLD) || '{}')
    return { friends: old.friends || [], rounds: old.rounds || [] }
  } catch (e) { return { friends: [], rounds: [] } }
}

export function saveLocalData(friends, rounds) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({
      friends, rounds: rounds.slice(0, 200)
    }))
  } catch (e) { console.warn('localStorage full:', e) }
}

export function saveFriendLocal(friends, data, friendId) {
  const updated = [...friends]
  if (friendId) {
    const idx = updated.findIndex(f => f.id === friendId)
    if (idx !== -1) updated[idx] = { ...data, id: friendId }
    else updated.push({ ...data, id: friendId })
  } else {
    updated.push({ ...data, id: 'f_' + Date.now() })
  }
  return updated
}

export function deleteFriendLocal(friends, id) {
  return friends.filter(f => f.id !== id)
}

// Admin funktioner bruger stadig Firestore
import { db } from './firebase-instance.js'
import { collection, doc, setDoc, deleteDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore'

export async function checkIsAdmin(uid) {
  try {
    const { getDoc } = await import('firebase/firestore')
    const snap = await getDoc(doc(db, 'administratorer', uid))
    return snap.exists()
  } catch (e) { return false }
}

export async function loadAllUsers() {
  try {
    const snap = await getDocs(collection(db, 'brugere'))
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
  } catch (e) { return [] }
}

export async function findUserByEmail(email) {
  try {
    const snap = await getDocs(query(collection(db, 'brugere'), where('email', '==', email)))
    if (snap.empty) return null
    return { uid: snap.docs[0].id, ...snap.docs[0].data() }
  } catch (e) { return null }
}

export async function addAdmin(uid, email) {
  await setDoc(doc(db, 'administratorer', uid), { email, created: serverTimestamp() })
}

export async function removeAdmin(uid) {
  await deleteDoc(doc(db, 'administratorer', uid))
}
