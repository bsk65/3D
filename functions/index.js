// functions/index.js — Cloud Function der sender push-notifikationer til
// inviterede brugere, når en ny "Skal vi skyde sammen"-aftale oprettes.
// Kører server-side (Admin SDK) fordi en klient ikke selv kan sende push
// til andre brugeres enheder uden en betroet backend.

const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const { setGlobalOptions } = require('firebase-functions/v2')
const admin = require('firebase-admin')

admin.initializeApp()
setGlobalOptions({ maxInstances: 10 })

function formatDate(iso) {
  const [y, m, d] = (iso || '').split('-')
  return y && m && d ? `${d}-${m}-${y}` : iso
}

exports.onMeetupCreated = onDocumentCreated('meetups/{meetupId}', async (event) => {
  const meetup = event.data.data()
  const invitedUids = meetup.invitedUids || []
  if (!invitedUids.length) return

  const db = admin.firestore()
  const userSnaps = await db.getAll(...invitedUids.map(uid => db.doc(`users/${uid}`)))

  const tokens = []
  const tokenToUid = new Map()
  userSnaps.forEach(snap => {
    const token = snap.exists ? snap.data().fcmToken : null
    if (token) { tokens.push(token); tokenToUid.set(token, snap.id) }
  })
  if (!tokens.length) return

  const message = {
    data: {
      title: 'Ny skydning foreslået',
      body: `${meetup.creatorName} har foreslået en skydning på ${meetup.courseName} d. ${formatDate(meetup.date)} kl. ${meetup.time}`,
      url: '/3D/'
    },
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
})
