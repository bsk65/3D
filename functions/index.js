// functions/index.js — Cloud Functions der sender push-notifikationer til
// inviterede brugere for "Skal vi skyde sammen"-aftaler: ved oprettelse af
// en ny aftale, og ved ændret dato/tidspunkt på en eksisterende. Kører
// server-side (Admin SDK) fordi en klient ikke selv kan sende push til
// andre brugeres enheder uden en betroet backend.

const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore')
const { setGlobalOptions } = require('firebase-functions/v2')
const admin = require('firebase-admin')

admin.initializeApp()
setGlobalOptions({ maxInstances: 10 })

function formatDate(iso) {
  const [y, m, d] = (iso || '').split('-')
  return y && m && d ? `${d}-${m}-${y}` : iso
}

// Sender en push-besked til fcmToken for hver af de givne uids, og rydder
// døde tokens op. Bruges af begge triggers herunder.
async function sendToUids(uids, title, body) {
  if (!uids.length) return
  const db = admin.firestore()
  const userSnaps = await db.getAll(...uids.map(uid => db.doc(`users/${uid}`)))

  const tokens = []
  const tokenToUid = new Map()
  userSnaps.forEach(snap => {
    const token = snap.exists ? snap.data().fcmToken : null
    if (token) { tokens.push(token); tokenToUid.set(token, snap.id) }
  })
  if (!tokens.length) return

  const message = {
    data: { title, body, url: '/3D/' },
    tokens,
    webpush: { headers: { Urgency: 'high' } }
  }
  const resp = await admin.messaging().sendEachForMulticast(message)

  const cleanup = []
  resp.responses.forEach((r, i) => {
    if (!r.success) {
      const code = r.error?.code
      if (code === 'messaging/registration-token-not-registered' ||
          code === 'messaging/invalid-registration-token') {
        const uid = tokenToUid.get(tokens[i])
        if (uid) cleanup.push(db.doc(`users/${uid}`).update({ fcmToken: admin.firestore.FieldValue.delete() }))
      }
    }
  })
  await Promise.all(cleanup)
}

exports.onMeetupCreated = onDocumentCreated('meetups/{meetupId}', async (event) => {
  const meetup = event.data.data()
  await sendToUids(
    meetup.invitedUids || [],
    'Ny skydning foreslået',
    `${meetup.creatorName} har foreslået en skydning på ${meetup.courseName} d. ${formatDate(meetup.date)} kl. ${meetup.time}`
  )
})

// Notificerer ved ændret dato/tidspunkt (fx "Rediger tidspunkt" eller
// accept af et foreslået tidspunkt) — ikke ved andre felt-ændringer
// (kommentarer, deltager-status m.m.). Opretteren selv udelades, da det
// altid er opretteren der udløser ændringen.
exports.onMeetupUpdated = onDocumentUpdated('meetups/{meetupId}', async (event) => {
  const before = event.data.before.data()
  const after = event.data.after.data()
  if (before.date === after.date && before.time === after.time) return

  const uids = (after.invitedUids || []).filter(uid => uid !== after.creatorUid)
  await sendToUids(
    uids,
    'Tidspunkt ændret',
    `${after.creatorName} har ændret tidspunktet for skydningen på ${after.courseName} til d. ${formatDate(after.date)} kl. ${after.time}`
  )
})
