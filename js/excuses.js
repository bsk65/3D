// js/excuses.js — "Undskyldning" på en runde: faste nøgler, gemt som
// excuse-feltet på runde-dokumentet og oversat via results.excuses.* i i18n.js.
// Bruges af results.js (rullemenuen på rundelisten) og analyse.js (feltet
// øverst i analysen af én enkelt runde, også for delte "Må jeg kigge med?"-runder).

import { t } from './i18n.js'

export const EXCUSE_KEYS=['crooked','wind','arrows','cold','shoulder','paces','nature','mercy','sun','sick']

// Oversat tekst for en rundes undskyldning, eller '' hvis ingen/ukendt nøgle.
export function excuseText(round){
  const k=round?.excuse
  return k&&EXCUSE_KEYS.includes(k)?t('results.excuses.'+k):''
}
