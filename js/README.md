# 3D Bueskydning PWA

En komplet Progressive Web App til 3D bueskydning med scoring, GPS, baner og venner.

## 🔧 Opsætning

### 1. Firebase-projekt

Opret et Firebase-projekt på https://console.firebase.google.com og aktiver:
- **Authentication** → Email/Password
- **Firestore Database** (production mode)
- **Storage**

### 2. Indsæt din Firebase-konfiguration

Åbn `js/firebase-instance.js` og erstat dette med dine Firebase-oplysninger:

```js
const firebaseConfig = {
  apiKey: "din-api-nøgle",
  authDomain: "dit-projekt.firebaseapp.com",
  projectId: "dit-projekt-id",
  storageBucket: "dit-projekt.appspot.com",
  messagingSenderId: "din-sender-id",
  appId: "din-app-id"
};
```

### 3. Firestore sikkerhedsregler

Sæt disse regler i Firestore-konsollen:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users kan kun se/redigere egne data
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
      match /{document=**} {
        allow read, write: if request.auth.uid == uid;
      }
    }
    // Baner er offentlige at læse, kun admin kan skrive
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
    // Admin-liste: alle kan læse deres eget, kun admins kan skrive
    match /admins/{uid} {
      allow read: if request.auth.uid == uid;
      allow write: if exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
  }
}
```

### 4. Storage-regler

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /courses/{courseId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if firestore.exists(/databases/(default)/documents/admins/$(request.auth.uid));
    }
  }
}
```

### 5. Deploy

Brug **Firebase Hosting** (anbefalet):
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Eller kopier alle filer til ethvert statisk hosting (Netlify, Vercel, GitHub Pages).

## 📁 Filstruktur

```
archery-pwa/
├── index.html          — HTML struktur
├── manifest.json       — PWA manifest
├── sw.js               — Service worker (offline)
├── css/
│   └── style.css       — Al CSS styling (mørkt skovtema)
└── js/
    ├── app.js          — Hoved-app: state, navigation, UI
    ├── auth.js         — Login/signup/logout
    ├── firebase.js     — Firebase re-eksport
    ├── firebase-instance.js — Firebase singleton
    ├── scoring.js      — Pointtælling og rundelogik
    ├── courses.js      — Baner, mål, billeder
    ├── gps.js          — GPS sporing og rutehåndtering
    └── friends.js      — Venner og admin
```

## 🎯 Funktioner

- **Login/opret konto** med email + kodeord
- **Ny runde**: vælg bane eller antal mål, tilføj deltagere, GPS-optioner
- **Under skydning**: pil-scoring per skytte (11/10/8/5/M), fremgangsbar, statistik
- **GPS-sporing**: rute, tid, afstand (wake lock holder skærmen tændt)
- **Mål-redigering** (admin): navn, billede, GPS-position
- **Resultater**: vindertabel, pilfordelingsoversigt
- **Baner**: satellitkortet med Leaflet + Esri, besøg, ruter
- **Venner**: bibliotek med navn, email, telefon, klub, buetype
- **Admin-panel**: brugerliste, tilføj/fjern admins
- **QR-kode** i header
- **Offline** via service worker
- **Aktive runder** gemmes og genoptages (max 24 timer)

## ⚙️ Tekniske noter

- **Scores** gemmes som strings: `"11,10;8,M"` (Firestore understøtter ikke nested arrays)
- **GPS-ruter** som semicolon-separeret string: `"55.1234,10.5678;55.1235,10.5679"`
- **Billeder** komprimeres via Canvas til 400px / 65% JPEG inden upload
- **ES6 modules** — ingen globale `window.*`-variabler
- **Firebase SDK 10** (modular API)
