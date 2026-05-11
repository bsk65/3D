// js/app.js — Hoved-app: state, navigation, UI

const state = {
  lang: 'da', user: null, profile: null, isAdmin: false,
  friends: [], courses: [], rounds: [], round: null, course: null,
  currentCourse: null, courseMap: null, courseMapLayer: null,
  gpsTracking: false, gpsPaused: false, warnThreshold: 8,
  deleteConfirm: {}, editFriendId: null, finishTap: 0, abortTap: 0,
};

// Unsubscribe functions for realtime listeners
const unsub = { courses: null, friends: null, rounds: null };

let wakeLock = null;
async function acquireWakeLock() {
  try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch(e){}
}
function releaseWakeLock() { if (wakeLock) { wakeLock.release(); wakeLock = null; } }

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  auth.onAuthStateChanged(async user => {
    if (user) {
      state.user = user;
      try {
        const snap = await db.collection('brugere').doc(user.uid).get();
        if (snap.exists) {
          const d = snap.data();
          state.profile = {
            name:  d.name  || d.yam    || user.email,
            email: d.email || d['e-mail'] || user.email,
          };
        } else {
          state.profile = { name: user.email, email: user.email };
        }
      } catch(e) {
        state.profile = { name: user.email, email: user.email };
      }
      await onLogin();
    } else {
      onLogout();
    }
  });

  // PWA install
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('pwa-banner').style.display = 'flex';
  });
  document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.getElementById('pwa-banner').style.display = 'none';
  });
  document.getElementById('pwa-dismiss-btn')?.addEventListener('click', () => {
    document.getElementById('pwa-banner').style.display = 'none';
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW:', e));
  }

  updateStartTargetDropdown(24);
  document.getElementById('target-count').addEventListener('change', e => {
    updateStartTargetDropdown(Number(e.target.value));
  });

  document.getElementById('photo-input')?.addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try {
      const b64 = await compressImage(file);
      const tIdx = curTargetIdx();
      const url  = await uploadTargetImage(state.round.courseId, tIdx, b64);
      await updateTarget(state.round.courseId, tIdx, { imageUrl: url });
      if (state.course?.targets) state.course.targets[tIdx].imageUrl = url;
      updateTopBar();
    } catch(e) { alert('Fejl ved upload: ' + e.message); }
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.add('hidden'); });
  });
});

// ─── LOGIN / LOGOUT ───────────────────────────────────────────────────────────
async function onLogin() {
  document.getElementById('hdr-name').textContent = state.profile.name || state.user.email;
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('app-screen').classList.add('active');

  state.isAdmin = await checkIsAdmin(state.user.uid);
  document.getElementById('admin-badge').classList.toggle('hidden', !state.isAdmin);
  document.querySelectorAll('.admin-only').forEach(el => el.classList.toggle('hidden', !state.isAdmin));

  // Start realtime listeners
  startCoursesListener();
  startFriendsListener();
  startRoundsListener();

  await tryResumeRound();
  applyI18n();
}

function onLogout() {
  // Stop all listeners
  Object.values(unsub).forEach(fn => fn && fn());
  Object.keys(unsub).forEach(k => unsub[k] = null);
  state.user = null; state.profile = null; state.round = null;
  releaseWakeLock();
  document.getElementById('app-screen').classList.remove('active');
  document.getElementById('auth-screen').classList.add('active');
}

// ─── LOCAL STORAGE ────────────────────────────────────────────────────────────
const LS_KEY = 'archery_v4';
const LS_KEY_NEW = 'archery_v5';

function lsLoad() {
  try {
    // Venner og runder er lokale
    const data = JSON.parse(localStorage.getItem(LS_KEY_NEW) || 'null');
    if (data) return data;
    // Migrer venner fra gammel app
    const oldData = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    return { friends: oldData.friends || [], rounds: oldData.rounds || [] };
  } catch(e) { return { friends: [], rounds: [] }; }
}

function lsSave() {
  try {
    // Gem KUN venner og runder lokalt — baner er i Firestore
    localStorage.setItem(LS_KEY_NEW, JSON.stringify({
      friends: state.friends,
      rounds:  state.rounds.slice(0, 200),
    }));
  } catch(e) { console.warn('localStorage full:', e); }
}

// ─── DATA LISTENERS ───────────────────────────────────────────────────────────
function startCoursesListener() {
  // onSnapshot bruger automatisk Firestore cache ved første kald
  // så data vises øjeblikkeligt hvis de er cachet fra tidligere besøg
  if (unsub.courses) unsub.courses();
  unsub.courses = db.collection('kurser').onSnapshot(snap => {
    state.courses = snap.docs.map(d => {
      const data = d.data();
      return {
        id:         d.id,
        name:       data.name       || data.yam        || '—',
        numTargets: data.numTargets || data.antalMål    || 24,
        location:   data.location   || data.beliggenhed || '',
        targets:    data.targets    || data.mål         || [],
        visits:     data.visits     || data.besøg       || [],
      };
    });
    renderCoursesList();
    populateCourseDropdown();
  }, err => console.warn('courses listener:', err));
}

function startFriendsListener() {
  // Venner er KUN lokale — ingen Firestore
  const local = lsLoad();
  state.friends = local.friends || [];
  renderFriendsList();
  renderQuickFriends();
}

function startRoundsListener() {
  // Runder er KUN lokale — ingen Firestore
  const local = lsLoad();
  state.rounds = local.rounds || [];
  renderRoundsList();
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
window.appLang = 'da';
const I18N = {
  da: { scoring:'POINT', results:'RESULTATER', courses:'BANER', friends:'VENNER' },
  en: { scoring:'SCORING', results:'RESULTS', courses:'COURSES', friends:'FRIENDS' }
};

function toggleLang() {
  window.appLang = window.appLang === 'da' ? 'en' : 'da';
  document.getElementById('lang-btn').textContent = window.appLang.toUpperCase();
  applyI18n();
}

function applyI18n() {
  const t = I18N[window.appLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n];
  });
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tab}`)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.classList.add('active');
  if (tab === 'friends') renderAdminSection();
  if (tab === 'courses' && state.courseMap) {
    setTimeout(() => state.courseMap.invalidateSize(), 100);
  }
}

// ─── SETUP ────────────────────────────────────────────────────────────────────
function populateCourseDropdown() {
  const sel = document.getElementById('course-sel');
  const current = sel.value;
  sel.innerHTML = '<option value="">-- Ingen bane --</option>';
  state.courses.forEach(c => {
    const o = document.createElement('option');
    o.value = c.id;
    o.textContent = `${c.name} (${c.numTargets} mål)`;
    sel.appendChild(o);
  });
  if (current) sel.value = current;
  sel.onchange = () => {
    const c = state.courses.find(x => x.id === sel.value);
    updateStartTargetDropdown(c ? c.numTargets : Number(document.getElementById('target-count').value));
  };
}

function updateStartTargetDropdown(n) {
  const sel = document.getElementById('start-target');
  sel.innerHTML = '';
  for (let i = 1; i <= n; i++) {
    const o = document.createElement('option'); o.value = i; o.textContent = i; sel.appendChild(o);
  }
}

function addParticipant(id, name, isGuest) {
  if (document.getElementById(`chip-${id}`)) return;
  const div = document.createElement('div');
  div.className = 'pchip'; div.id = `chip-${id}`;
  div.innerHTML = `<span class="pchip-name">🎯 ${name}</span>
    <button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`;
  document.getElementById('p-list').appendChild(div);
}

function getParticipants() {
  return Array.from(document.querySelectorAll('.pchip')).map(c => ({
    id: c.id.replace('chip-', ''),
    name: c.querySelector('.pchip-name').textContent.replace('🎯 ', '').trim(),
    isGuest: c.id.startsWith('chip-guest-')
  }));
}

function renderQuickFriends() {
  const el = document.getElementById('qfriends'); el.innerHTML = '';
  state.friends.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'qfbtn'; btn.textContent = f.name;
    btn.onclick = () => addParticipant(f.id, f.name);
    el.appendChild(btn);
  });
}

function searchFriends(val) {
  const list = document.getElementById('ac-list');
  if (!val.trim()) { list.classList.add('hidden'); return; }
  const matches = state.friends.filter(f => f.name.toLowerCase().includes(val.toLowerCase()));
  if (!matches.length) { list.classList.add('hidden'); return; }
  list.innerHTML = matches.map(f =>
    `<div class="ac-item" onclick="addParticipant('${f.id}','${f.name.replace(/'/g,"\\'")}');
      document.getElementById('friend-search').value='';
      document.getElementById('ac-list').classList.add('hidden');">${f.name}</div>`
  ).join('');
  list.classList.remove('hidden');
}

// ─── START ROUND ──────────────────────────────────────────────────────────────
async function startRound() {
  const name       = document.getElementById('round-name').value.trim() || 'Min Skydning';
  const courseId   = document.getElementById('course-sel').value;
  const numTargets = Number(document.getElementById('target-count').value) || 24;
  const startAt    = Number(document.getElementById('start-target').value) - 1;
  const gpsAuto    = document.getElementById('gps-auto-sw').classList.contains('on');
  const gpsTrack   = document.getElementById('gps-track-sw').classList.contains('on');
  state.warnThreshold = Number(document.getElementById('warn-thresh').value) || 8;

  const parts = [
    { id: state.user.uid, name: state.profile.name, isGuest: false },
    ...getParticipants().filter(p => p.id !== state.user.uid)
  ];

  state.course = courseId ? (state.courses.find(c => c.id === courseId) || await loadCourse(courseId)) : null;

  const shooters = parts.map(p => {
    const s = makeShooter(p.id, p.name, p.isGuest);
    normalizeScores(s, numTargets);
    return s;
  });

  let startIdx = startAt;
  if (gpsAuto && state.course?.targets) {
    try { startIdx = findNearestTarget(state.course.targets, await getCurrentPosition()); }
    catch(e) {}
  }

  state.round = {
    name, courseId: courseId || null, courseName: state.course?.name || null,
    numTargets, startTarget: startIdx + 1, shooters,
    created: Date.now(),
    traversalOrder: buildOrder(startIdx, numTargets),
    traversalPos: 0,
  };

  if (gpsTrack) {
    state.gpsTracking = startTracking(updateGpsBar);
    document.getElementById('gps-bar').classList.toggle('hidden', !state.gpsTracking);
    acquireWakeLock();
  }

  showActivePanel();
  renderShooters();
  updateTopBar();
  saveActiveRound();
}

function buildOrder(start, total) {
  return Array.from({ length: total }, (_, i) => (start + i) % total);
}

function curTargetIdx() {
  return state.round.traversalOrder[state.round.traversalPos];
}

// ─── PANEL SWITCHES ───────────────────────────────────────────────────────────
function showSetupPanel()  {
  document.getElementById('setup-panel').classList.remove('hidden');
  document.getElementById('active-panel').classList.add('hidden');
  document.getElementById('results-panel').classList.add('hidden');
}
function showActivePanel() {
  document.getElementById('setup-panel').classList.add('hidden');
  document.getElementById('active-panel').classList.remove('hidden');
  document.getElementById('results-panel').classList.add('hidden');
}
function showResultsPanel(){
  document.getElementById('setup-panel').classList.add('hidden');
  document.getElementById('active-panel').classList.add('hidden');
  document.getElementById('results-panel').classList.remove('hidden');
}

// ─── SHOOTING UI ──────────────────────────────────────────────────────────────
function updateTopBar() {
  if (!state.round) return;
  const tIdx = curTargetIdx();
  const n    = state.round.numTargets;
  document.getElementById('tnum-big').textContent = tIdx + 1;
  document.getElementById('tnum-suf').textContent = ' af ' + n;
  document.getElementById('round-badge').textContent = state.round.name;

  const target = state.course?.targets?.[tIdx];
  document.getElementById('anim-name').textContent = target?.name || `Mål ${tIdx + 1}`;

  const scored = countScored(state.round.shooters, n);
  document.getElementById('pbar').style.width = `${(scored / n) * 100}%`;

  const allVals = state.round.shooters.flatMap(s =>
    s.scores.flat().filter(v => v !== null && v !== undefined)
  );
  const sum = allVals.reduce((a, v) => a + scoreVal(v), 0);
  const avg = allVals.length ? (sum / allVals.length).toFixed(1) : '—';
  document.getElementById('stat-avg').textContent  = avg;
  document.getElementById('stat-tot').textContent  = sum;
  document.getElementById('stat-rem').textContent  = n - scored;

  const imgEl = document.getElementById('anim-img');
  if (target?.imageUrl) { imgEl.src = target.imageUrl; imgEl.classList.remove('hidden'); }
  else imgEl.classList.add('hidden');

  document.getElementById('edit-target-btn').classList.toggle('hidden', !(state.isAdmin && state.round.courseId));
  document.getElementById('next-btn').textContent = state.round.traversalPos === n - 1 ? 'AFSLUT →' : 'NÆSTE →';

  const tAvg = calcTargetAverage(state.round.shooters, tIdx);
  document.getElementById('target-avg').textContent = tAvg !== null ? `Gns. dette mål: ${tAvg}` : '';
}

function renderShooters() {
  if (!state.round) return;
  const tIdx = curTargetIdx();
  const el   = document.getElementById('shooters-list'); el.innerHTML = '';
  state.round.shooters.forEach((s, si) => {
    const total = calcTotal(s.scores);
    const warn  = isBelowThreshold(s.scores, state.warnThreshold);
    const row   = s.scores[tIdx] || [null, null];
    const card  = document.createElement('div');
    card.className = 'shooter-card';
    card.innerHTML = `
      <div class="sh-head">
        <span style="font-size:18px;">🎯</span>
        ${warn ? '<span class="warn-dot"></span>' : ''}
        <span class="sh-name">${s.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${total}</div></div>
      </div>
      <div class="arrows-row">
        ${[0,1].map(ai => `
          <div class="arrow-grp">
            <div class="arrow-lbl">🎯 PIL ${ai+1}</div>
            <div class="score-btns">
              ${SCORE_VALUES.map(v => `
                <button class="sbtn ${row[ai] === v ? `sel-${v}` : ''}" data-v="${v}"
                  onclick="setScore(${si},${tIdx},${ai},'${v}')">
                  ${v}
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>`;
    el.appendChild(card);
  });
}

function setScore(shooterIdx, targetIdx, arrowIdx, val) {
  const v = val === 'M' ? 'M' : Number(val);
  state.round.shooters[shooterIdx].scores[targetIdx][arrowIdx] = v;
  saveActiveRound();
  renderShooters();
  updateTopBar();
}

function updateGpsBar({ lat, lng, distance, elapsed }) {
  document.getElementById('gps-time').textContent = formatDuration(elapsed);
  document.getElementById('gps-dist').textContent = formatDistance(distance);
  if (lat && lng) document.getElementById('gps-coord').textContent =
    `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

async function saveActiveRound() {
  if (!state.round || !state.user) return;
  try {
    await db.collection('brugere').doc(state.user.uid)
      .collection('aktiv').doc('runde').set(serializeRound(state.round));
  } catch(err) { console.error('saveActiveRound:', err); }
}

// ─── RESUME ───────────────────────────────────────────────────────────────────
async function tryResumeRound() {
  try {
    const snap = await db.collection('brugere').doc(state.user.uid)
      .collection('aktiv').doc('runde').get();
    if (!snap.exists) return;
    const data = snap.data();
    const age = Date.now() - (data.created?.toMillis ? data.created.toMillis() : (data.created || 0));
    if (age > 24 * 60 * 60 * 1000) {
      await db.collection('brugere').doc(state.user.uid).collection('aktiv').doc('runde').delete();
      return;
    }
    if (confirm('Genoptag den igangværende runde?')) {
      state.round = deserializeRound(data);
      state.round.traversalOrder = data.traversalOrder || buildOrder(0, state.round.numTargets);
      state.round.traversalPos   = data.traversalPos   || 0;
      if (state.round.courseId) {
        state.course = state.courses.find(c => c.id === state.round.courseId) ||
          await loadCourse(state.round.courseId);
      }
      showActivePanel();
      renderShooters();
      updateTopBar();
    }
  } catch(err) { console.error('tryResumeRound:', err); }
}

// ─── NAVIGATION BUTTONS ───────────────────────────────────────────────────────
function prevTarget() {
  if (!state.round || state.round.traversalPos <= 0) return;
  state.round.traversalPos--;
  saveActiveRound(); renderShooters(); updateTopBar();
  document.getElementById('scroll-area').scrollTop = 0;
}

function nextTarget() {
  if (!state.round) return;
  if (state.round.traversalPos < state.round.numTargets - 1) {
    state.round.traversalPos++;
    saveActiveRound(); renderShooters(); updateTopBar();
    document.getElementById('scroll-area').scrollTop = 0;
  } else {
    finishRound();
  }
}

function skipToTarget() {
  if (!state.round) return;
  document.getElementById('skip-input').max = state.round.numTargets;
  document.getElementById('skip-modal').classList.remove('hidden');
}

function doSkip() {
  const n = Number(document.getElementById('skip-input').value);
  if (!state.round || n < 1 || n > state.round.numTargets) return;
  const pos = state.round.traversalOrder.indexOf(n - 1);
  if (pos !== -1) state.round.traversalPos = pos;
  document.getElementById('skip-modal').classList.add('hidden');
  renderShooters(); updateTopBar();
}

// ─── FINISH / ABORT ───────────────────────────────────────────────────────────
async function finishRound() {
  state.finishTap++;
  const btn = document.getElementById('finish-btn');
  if (state.finishTap === 1) {
    btn.textContent = '✓ BEKRÆFT';
    setTimeout(() => { state.finishTap = 0; btn.textContent = '✓ AFSLUT NU'; }, 3000);
    return;
  }
  state.finishTap = 0; btn.textContent = '✓ AFSLUT NU';

  let gpsData = {};
  if (state.gpsTracking) { gpsData = stopTracking(); state.gpsTracking = false; }
  releaseWakeLock();

  const roundData = { ...serializeRound(state.round), completed: Date.now(), ...gpsData };
  try {
    // Gem runde lokalt
  const roundId = 'r_' + Date.now();
  const ref = { id: roundId };
  state.rounds.unshift({ ...roundData, id: roundId, created: { toMillis: () => Date.now(), toDate: () => new Date() } });
  lsSave();
  // Gem også til Firestore i baggrunden (valgfrit backup)
  db.collection('brugere').doc(state.user.uid)
    .collection('runder').doc(roundId).set({
      ...roundData,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.warn('Firestore backup fejl:', e));
    if (state.round.courseId) {
      const winner = findWinner(state.round.shooters);
      await addCourseVisit(state.round.courseId, {
        roundId: ref.id,
        date: new Date().toLocaleDateString('da-DK'),
        participants: state.round.shooters.map(s => s.name),
        winner: winner?.name,
        winnerScore: winner ? calcTotal(winner.scores) : 0,
        gpsRoute: gpsData.route || null,
        gpsDuration: gpsData.duration || null,
        gpsDistance: gpsData.distance || null,
      });
    }
    await db.collection('brugere').doc(state.user.uid)
      .collection('aktiv').doc('runde').delete();
  } catch(err) { console.error('finishRound:', err); }

  const finishedRound = state.round;
  state.round = null;
  lsSave();
  renderResults(finishedRound);
  showResultsPanel();
}

async function abortRound() {
  state.abortTap++;
  const btn = document.getElementById('abort-btn');
  if (state.abortTap === 1) {
    btn.textContent = '🗑 BEKRÆFT';
    setTimeout(() => { state.abortTap = 0; btn.textContent = '🗑 AFBRYD'; }, 3000);
    return;
  }
  state.abortTap = 0; btn.textContent = '🗑 AFBRYD';
  if (state.gpsTracking) { stopTracking(); state.gpsTracking = false; }
  releaseWakeLock();
  try {
    await db.collection('brugere').doc(state.user.uid)
      .collection('aktiv').doc('runde').delete();
  } catch(e) {}
  state.round = null;
  showSetupPanel();
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function renderResults(round) {
  const winner = findWinner(round.shooters);
  document.getElementById('win-wrap').innerHTML = `
    <div class="win-trophy">🏆</div>
    <div class="win-name">${winner?.name || '—'}</div>
    <div class="win-score">${winner ? calcTotal(winner.scores) : 0} point</div>`;
  document.getElementById('res-table').innerHTML  = buildResultsTable(round);
  document.getElementById('res-dist').innerHTML   = buildDistribution(round);
}

function buildResultsTable(round) {
  let h = `<div class="tbl-wrap"><table class="rtbl">
    <tr><th>Mål</th>${round.shooters.map(s => `<th>${s.name}</th>`).join('')}</tr>`;
  for (let t = 0; t < round.numTargets; t++) {
    h += `<tr><td class="tc">${t+1}</td>`;
    round.shooters.forEach(s => {
      const r = s.scores[t] || [null,null];
      const sum = (r[0] !== null && r[0] !== 'M' ? Number(r[0]) : 0) +
                  (r[1] !== null && r[1] !== 'M' ? Number(r[1]) : 0);
      h += `<td>${r.map(v => v === null ? '—' : v).join('/')}<br><small>${sum}</small></td>`;
    });
    h += '</tr>';
  }
  h += `<tr class="tr-tot"><td class="tc">Total</td>
    ${round.shooters.map(s => `<td>${calcTotal(s.scores)}</td>`).join('')}</tr>
  </table></div>`;
  return h;
}

function buildDistribution(round) {
  return '<div class="dist-grid">' + round.shooters.map(s => {
    const d = calcDistribution(s.scores);
    return `<div class="dist-card"><div class="dist-name">${s.name}</div>
      ${Object.entries(d).map(([k,v]) =>
        `<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`
      ).join('')}
    </div>`;
  }).join('') + '</div>';
}

// ─── ROUNDS LIST ──────────────────────────────────────────────────────────────
function renderRoundsList() {
  const el = document.getElementById('rounds-list');
  if (!state.rounds.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';
    return;
  }
  el.innerHTML = '';
  state.rounds.forEach(r => {
    const shooters = (r.shooters||[]).map(s => ({
      ...s, scores: parseScores(s.scores)
    }));
    const winner = shooters.length ? findWinner(shooters) : null;
    const date   = r.created?.toDate ? r.created.toDate().toLocaleDateString('da-DK') : '—';
    const card   = document.createElement('div');
    card.className = 'rcard';
    card.innerHTML = `
      <div class="rcard-info">
        <div class="rcard-name">${r.name || 'Runde'}</div>
        <div class="rcard-meta">${date} · ${r.courseName || r.numTargets + ' mål'}</div>
        <div class="rcard-win">🏆 ${winner?.name || '—'} (${winner ? calcTotal(winner.scores) : 0} pt)</div>
      </div>
      <button class="del-btn" data-id="${r.id}">✕</button>`;
    card.querySelector('.rcard-info').onclick = () => showRoundPopup({ ...r, shooters });
    card.querySelector('.del-btn').onclick = async e => {
      const btn = e.currentTarget;
      const key = `r-${r.id}`;
      if (!state.deleteConfirm[key]) {
        state.deleteConfirm[key] = true; btn.classList.add('conf'); btn.textContent = 'Slet?';
        setTimeout(() => { delete state.deleteConfirm[key]; btn.classList.remove('conf'); btn.textContent = '✕'; }, 3000);
      } else {
        delete state.deleteConfirm[key];
        state.rounds = state.rounds.filter(x => x.id !== r.id);
        lsSave();
        renderRoundsList();
        // Slet også fra Firestore i baggrunden
        db.collection('brugere').doc(state.user.uid).collection('runder').doc(r.id)
          .delete().catch(e => console.warn('Firestore delete:', e));
      }
    };
    el.appendChild(card);
  });
}

function showRoundPopup(round) {
  let pop = document.getElementById('round-popup');
  if (!pop) {
    pop = document.createElement('div'); pop.id = 'round-popup'; pop.className = 'rpop';
    pop.innerHTML = `<div class="rpop-box">
      <button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button>
      <div id="rpop-body"></div></div>`;
    document.body.appendChild(pop);
  }
  pop.classList.remove('hidden');
  document.getElementById('rpop-body').innerHTML =
    `<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${round.name}</h3>` +
    buildResultsTable(round) + buildDistribution(round);
}

// ─── COURSES UI ───────────────────────────────────────────────────────────────
function renderCoursesList() {
  const el = document.getElementById('courses-list');
  if (!state.courses.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';
    return;
  }
  el.innerHTML = '';
  state.courses.forEach(c => {
    const card = document.createElement('div'); card.className = 'ccard';
    card.innerHTML = `<div class="ccard-name">${c.name}</div>
      <div class="ccard-meta">${c.numTargets} mål · ${c.location||'—'}</div>`;
    card.onclick = () => openCourseDetail(c);
    el.appendChild(card);
  });
}

function openCourseDetail(course) {
  state.currentCourse = course;
  document.getElementById('courses-list-view').classList.add('hidden');
  document.getElementById('course-detail-view').classList.remove('hidden');
  document.getElementById('course-detail-title').textContent = course.name;
  switchSubtab('map');
  initCourseMap(course);
  renderVisits(course);
  renderCourseEditForm(course);
}

function initCourseMap(course) {
  const mapEl = document.getElementById('course-map');
  if (state.courseMap) { state.courseMap.remove(); state.courseMap = null; }
  state.courseMap = L.map(mapEl);
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Esri', maxZoom: 19 }
  ).addTo(state.courseMap);
  const bounds = [];
  (course.targets||[]).forEach((t, i) => {
    if (!t.gps) return;
    bounds.push([t.gps.lat, t.gps.lng]);
    L.marker([t.gps.lat, t.gps.lng], { icon: L.divIcon({
      className: '',
      html: `<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i+1}</div>`,
      iconSize:[28,28], iconAnchor:[14,14]
    })}).addTo(state.courseMap)
      .bindPopup(`<b>${i+1}. ${t.name||'Mål'}</b>
        ${t.emoji ? `<br>${t.emoji}` : ''}
        ${t.imageUrl ? `<br><img src="${t.imageUrl}" style="max-width:140px;border-radius:4px;margin-top:4px;" />` : ''}`);
  });
  if (bounds.length) state.courseMap.fitBounds(bounds, { padding:[20,20] });
  else state.courseMap.setView([55.7, 12.5], 10);
}

function renderVisits(course) {
  const el = document.getElementById('visits-list');
  const visits = course.visits || course.besøg || [];
  if (!visits.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';
    return;
  }
  el.innerHTML = '';
  visits.forEach((v, idx) => {
    const card = document.createElement('div'); card.className = 'visit-card';
    card.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
        <span style="font-weight:700;font-size:13px;">${v.date}</span>
        <div style="display:flex;gap:6px;">
          ${v.gpsRoute ? `<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${v.gpsRoute}'))">🗺️</button>` : ''}
          <button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${idx})">✕</button>
        </div>
      </div>
      <div style="font-size:12px;color:var(--muted);">${(v.participants||[]).join(', ')}</div>
      ${v.winner ? `<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${v.winner} (${v.winnerScore} pt)</div>` : ''}`;
    el.appendChild(card);
  });
}

async function deleteVisit(idx) {
  if (!confirm('Slet dette besøg?')) return;
  await removeCourseVisit(state.currentCourse.id, idx);
  state.currentCourse = await loadCourse(state.currentCourse.id);
  renderVisits(state.currentCourse);
}

function showRouteOnMap(points) {
  if (!state.courseMap || !points.length) return;
  if (state.courseMapLayer) state.courseMap.removeLayer(state.courseMapLayer);
  state.courseMapLayer = L.polyline(points.map(p => [p.lat,p.lng]),
    { color:'#e8a020', weight:3, dashArray:'8,4' }).addTo(state.courseMap);
  state.courseMap.fitBounds(state.courseMapLayer.getBounds(), { padding:[20,20] });
  switchSubtab('map');
}

function renderCourseEditForm(course) {
  document.getElementById('course-edit-form').innerHTML = `
    <div class="fg"><label class="lbl">Banenavn</label>
      <input type="text" id="edit-cname" value="${course.name}" /></div>
    <div class="fg"><label class="lbl">Lokation</label>
      <input type="text" id="edit-cloc" value="${course.location||''}" /></div>
    <button class="btn btn-gold" onclick="saveCourseEdit()">Gem ændringer</button>`;
}

async function saveCourseEdit() {
  const name = document.getElementById('edit-cname').value.trim();
  const loc  = document.getElementById('edit-cloc').value.trim();
  if (!name) return;
  await updateCourse(state.currentCourse.id, { name, location: loc, yam: name, beliggenhed: loc });
  state.currentCourse.name = name; state.currentCourse.location = loc;
  document.getElementById('course-detail-title').textContent = name;
  alert('Gemt!');
}

function switchSubtab(name) {
  document.querySelectorAll('.stab').forEach(b => b.classList.toggle('active', b.dataset.stab === name));
  document.querySelectorAll('.stab-c').forEach(el => {
    el.classList.toggle('active', el.id === `stab-${name}`);
    el.classList.toggle('hidden', el.id !== `stab-${name}`);
  });
  if (name === 'map' && state.courseMap) setTimeout(() => state.courseMap.invalidateSize(), 100);
}

async function toggleMyPos() {
  const sw = document.getElementById('mypos-sw');
  sw.classList.toggle('on');
  if (sw.classList.contains('on')) {
    try {
      const pos = await getCurrentPosition();
      L.circle([pos.lat,pos.lng], { radius:10, color:'#2a7ae8', fillColor:'#2a7ae8', fillOpacity:0.7 })
        .addTo(state.courseMap);
      state.courseMap.panTo([pos.lat,pos.lng]);
    } catch(e) { alert('GPS ikke tilgængeligt'); sw.classList.remove('on'); }
  }
}

async function doDeleteCourse() {
  if (!state.currentCourse || !confirm(`Slet banen "${state.currentCourse.name}"?`)) return;
  await deleteCourse(state.currentCourse.id);
  document.getElementById('courses-list-view').classList.remove('hidden');
  document.getElementById('course-detail-view').classList.add('hidden');
}

async function doCreateCourse() {
  const name = document.getElementById('new-course-name').value.trim();
  const loc  = document.getElementById('new-course-loc').value.trim();
  const num  = Number(document.getElementById('new-course-targets').value) || 24;
  if (!name) return;
  await createCourse(name, num, loc);
  document.getElementById('create-course-modal').classList.add('hidden');
  document.getElementById('new-course-name').value = '';
}

// ─── EDIT TARGET ──────────────────────────────────────────────────────────────
function openEditTarget() {
  const tIdx   = curTargetIdx();
  const target = state.course?.targets?.[tIdx];
  document.getElementById('edit-tname').value = target?.name || '';
  document.getElementById('edit-panel').classList.remove('hidden');
}

async function saveEditTarget() {
  const name = document.getElementById('edit-tname').value.trim();
  const tIdx = curTargetIdx();
  if (state.round.courseId) {
    await updateTarget(state.round.courseId, tIdx, { name });
    if (state.course?.targets) state.course.targets[tIdx].name = name;
  }
  document.getElementById('edit-panel').classList.add('hidden');
  updateTopBar();
}

async function editGps() {
  try {
    const pos = await getCurrentPosition();
    const tIdx = curTargetIdx();
    await updateTarget(state.round.courseId, tIdx, { gps: pos });
    if (state.course?.targets) state.course.targets[tIdx].gps = pos;
    alert('GPS gemt!');
  } catch(e) { alert('GPS fejl: ' + e.message); }
}

// ─── FRIENDS UI ───────────────────────────────────────────────────────────────
function renderFriendsList() {
  const el = document.getElementById('friends-list');
  if (!state.friends.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';
    return;
  }
  el.innerHTML = '';
  state.friends.forEach(f => {
    const card = document.createElement('div'); card.className = 'fcard';
    card.innerHTML = `
      <div class="favatar">🎯</div>
      <div class="finfo">
        <div class="fname">${f.name}</div>
        <div class="fmeta">${[f.email,f.phone,f.club,f.bowType].filter(Boolean).join(' · ')}</div>
      </div>
      <div class="factions">
        <button class="btn-icon" onclick='openFriendModal(${JSON.stringify(f)})'>✏️</button>
        <button class="btn-icon" style="color:var(--danger);"
          onclick="doDeleteFriend('${f.id}','${f.name.replace(/'/g,"\\'")}')">🗑</button>
      </div>`;
    el.appendChild(card);
  });
}

function openFriendModal(friend) {
  state.editFriendId = friend?.id || null;
  document.getElementById('friend-modal-title').textContent = friend ? 'Rediger ven' : 'Tilføj ven';
  document.getElementById('f-name').value    = friend?.name    || '';
  document.getElementById('f-email').value   = friend?.email   || '';
  document.getElementById('f-phone').value   = friend?.phone   || '';
  document.getElementById('f-club').value    = friend?.club    || '';
  document.getElementById('f-bow').value     = friend?.bowType || '';
  document.getElementById('friend-modal').classList.remove('hidden');
}

async function saveFriendModal() {
  const data = {
    name:    document.getElementById('f-name').value.trim(),
    email:   document.getElementById('f-email').value.trim(),
    phone:   document.getElementById('f-phone').value.trim(),
    club:    document.getElementById('f-club').value.trim(),
    bowType: document.getElementById('f-bow').value,
  };
  if (!data.name) return;
  // Gem ven lokalt
  if (state.editFriendId) {
    const idx = state.friends.findIndex(f => f.id === state.editFriendId);
    if (idx !== -1) state.friends[idx] = { ...data, id: state.editFriendId };
    else state.friends.push({ ...data, id: state.editFriendId });
  } else {
    state.friends.push({ ...data, id: 'f_' + Date.now() });
  }
  lsSave();
  renderFriendsList();
  renderQuickFriends();
  document.getElementById('friend-modal').classList.add('hidden');
}

async function doDeleteFriend(id, name) {
  if (!confirm(`Slet ${name}?`)) return;
  state.friends = state.friends.filter(f => f.id !== id);
  lsSave();
  renderFriendsList();
  renderQuickFriends();
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
async function renderAdminSection() {
  if (!state.isAdmin) return;
  document.getElementById('admin-section').classList.remove('hidden');
  const users = await loadAllUsers();
  const el    = document.getElementById('users-list'); el.innerHTML = '';
  users.forEach(u => {
    const row = document.createElement('div'); row.className = 'urow';
    const date = u.created?.toDate ? u.created.toDate().toLocaleDateString('da-DK') : '—';
    row.innerHTML = `<span class="un">${u.name||u.yam||'—'}</span>
      <span class="ue">${u.email||u['e-mail']||''}</span>
      <span class="ud">${date}</span>`;
    el.appendChild(row);
  });
}

async function doAddAdmin() {
  const email = document.getElementById('admin-email').value.trim();
  if (!email) return;
  const user = await findUserByEmail(email);
  if (!user) { alert('Bruger ikke fundet'); return; }
  await addAdmin(user.uid, email);
  alert(`${user.name||email} er nu admin`);
  document.getElementById('admin-email').value = '';
}

// ─── QR CODE ──────────────────────────────────────────────────────────────────
function showQR() {
  document.getElementById('qr-modal').classList.remove('hidden');
  const el = document.getElementById('qr-canvas'); el.innerHTML = '';
  if (typeof QRCode !== 'undefined') {
    new QRCode(el, {
      text: window.location.href,
      width: 200, height: 200,
      colorDark: '#1a3a1a', colorLight: '#fff'
    });
  }
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
function openGuestModal() {
  document.getElementById('guest-name').value = '';
  document.getElementById('guest-modal').classList.remove('hidden');
}

function addGuest() {
  const name = document.getElementById('guest-name').value.trim();
  if (!name) return;
  addParticipant(`guest-${Date.now()}`, name, true);
  document.getElementById('guest-modal').classList.add('hidden');
}
