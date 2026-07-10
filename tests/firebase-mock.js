// Stub for Firebase SDK-kald der kører ved import af js/main.js.
// Testene rammer aldrig et rigtigt Firebase-projekt.
import { vi } from 'vitest'

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => ({}))
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  signOut: vi.fn()
}))

vi.mock('firebase/firestore', () => ({
  initializeFirestore: vi.fn(() => ({})),
  persistentLocalCache: vi.fn(() => ({})),
  persistentMultipleTabManager: vi.fn(() => ({})),
  collection: vi.fn(),
  doc: vi.fn(),
  setDoc: vi.fn(),
  getDoc: vi.fn(),
  getDocs: vi.fn(),
  deleteDoc: vi.fn(),
  updateDoc: vi.fn(),
  addDoc: vi.fn(),
  serverTimestamp: vi.fn(),
  query: vi.fn(),
  where: vi.fn()
}))

vi.mock('firebase/storage', () => ({
  getStorage: vi.fn(() => ({})),
  ref: vi.fn(),
  uploadString: vi.fn(),
  getDownloadURL: vi.fn(),
  deleteObject: vi.fn()
}))
