// js/privacy.js — Privatlivspolitik-version og samtykke-tjek.
// PRIVACY_VERSION SKAL matche "Sidst opdateret"-datoen i public/privatliv.html.
// Bump denne værdi ved en fremtidig væsentlig ændring af politikken — så
// bliver alle brugere (nye som eksisterende) automatisk bedt om at godkende
// igen, uden yderligere kodeændringer (se app-init.js's onLogin-gate).
export const PRIVACY_VERSION = '2026-08-30'

export function hasAcceptedCurrentPolicy(profile){
  return profile?.privacyAcceptedVersion === PRIVACY_VERSION
}

// ─── NYHEDSBREV-KONTAKT (Venner-fanen) ────────────────────────────────────────
// I modsætning til selve politik-godkendelsen (ét-gangs, ikke-lukbar gate)
// skal nyhedsbrevs-tilmelding altid kunne ændres bagefter — denne kontakt er
// synlig for alle brugere, ikke kun ved oprettelse/den engangs-gate.
import { state } from './state.js'
import { db, doc, updateDoc, serverTimestamp } from './firebase-init.js'
import { showToast } from './utils.js'
import { t } from './i18n.js'

export function initNewsletterToggle(){
  const sw=document.getElementById('newsletter-sw')
  if(!sw)return
  sw.classList.toggle('on',!!state.profile.newsletterConsent)
  sw.onclick=async()=>{
    const next=!state.profile.newsletterConsent
    sw.classList.toggle('on',next)
    try{
      await updateDoc(doc(db,'users',state.user.uid),{
        newsletterConsent:next,newsletterConsentAt:next?serverTimestamp():null
      })
      state.profile.newsletterConsent=next
    }catch(e){
      sw.classList.toggle('on',!next) // rul UI'en tilbage hvis skrivningen fejlede
      showToast(t('common.errorPrefix')+e.message,'error')
    }
  }
}
