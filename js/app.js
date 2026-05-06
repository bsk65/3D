// js/app.js — Hoved-app: state, navigation, UI

import { initApp } from './firebase-instance.js';
import { getDB, getAuth } from './firebase-instance.js';
import { initAuth } from './auth.js';
import {
  makeShooter, normalizeShooterScores, serializeRound, deserializeRound,
  calcTotal, calcAverage, calcTargetAverage, calcDistribution,
  findWinner, isBelowThreshold, countScoredTargets, SCORE_VALUES, WARN_THRESHOLD_DEFAULT
} from './scoring.js';
import {
  loadCourses, loadCourse, createCourse, updateCourse, updateTarget,
  uploadTargetImage, addCourseVisit, removeCourseVisit, deleteCourse, compressImage
} from './courses.js';
import {
  loadFriends, saveFriend, deleteFriend, isAdmin,
  loadAdmins, addAdmin, removeAdmin, loadAllUsers, findUserByEmail
} from './friends.js';
import {
  startTracking, stopTracking, togglePause, getCurrentPosition,
  findNearestTarget, formatDuration, formatDistance, parseRoute
} from './gps.js';
import {
  collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
  serverTimestamp, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── i18n ────────────────────────────────────────────────────────────────────
const I18N = {
  da: {
    scoring:'POINT', results:'RESULTATER', courses:'BANER', friends:'VENNER',
    newRound:'Ny Runde', roundName:'Rundenavn', selectCourse:'Vælg bane',
    or:'eller', targetCount:'Antal mål', participants:'Deltagere',
    addGuest:'Tilføj gæst', gpsOptions:'GPS-indstillinger',
    autoFindNearest:'Auto-find nærmeste mål', trackRoute:'Spor rute og tid',
    startRound:'Start runde', avg:'Gns.', total:'Total', remaining:'Tilbage',
    targets:'mål', sendEmail:'📧 Send email', myRounds:'Mine runder',
    map:'Kort', visits:'Besøg', edit:'Rediger', showMyPos:'📍 Vis min position',
    createCourse:'Opret bane', create:'Opret', cancel:'Annuller',
    deleteCourse:'🗑 Slet bane', adminSection:'Administrator', allUsers:'Alle brugere',
    jumpToTarget:'Hop til mål',
  },
  en: {
    scoring:'SCORING', results:'RESULTS', courses:'COURSES', friends:'FRIENDS',
    newRound:'New Round', roundName:'Round Name', selectCourse:'Select course',
    or:'or', targetCount:'Targets', participants:'Participants',
    addGuest:'Add guest', gpsOptions:'GPS options',
    autoFindNearest:'Auto-find nearest target', trackRoute:'Track route and time',
    startRound:'Start round', avg:'Avg.', total:'Total', remaining:'Remaining',
    targets:'targets', sendEmail:'📧 Send email', myRounds:'My rounds',
    map:'Map', visits:'Visits', edit:'Edit', showMyPos:'📍 Show my position',
    createCourse:'Create course', create:'Create', cancel:'Cancel',
    deleteCourse:'🗑 Delete course', adminSection:'Administrator', allUsers:'All users',
    jumpToTarget:'Jump to target',
  }
};

// ─── APP STATE ────────────────────────────────────────────────────────────────
const state = {
  lang: 'da',
  currentUser: null,
  userProfile: null,
  isAdmin: false,
  currentTab: 'scoring',
  friends: [],
  courses: [],
  rounds: [],
  // Active round
  round: null, // {name, courseId, courseName, numTargets, startTarget, shooters, currentTarget, created}
  course: null, // loaded course object for active round
  gpsTracking: false,
  gpsPaused: false,
  warnThreshold: WARN_THRESHOLD_DEFAULT,
  // Courses tab
  currentCourse: null,
  courseMap: null,
  courseMapLayer: null,
  // UI state
  deleteConfirm: {}, // {[key]: timeout}
  editFriendId: null,
};

// ─── WAKE LOCK ───────────────────────────────────────────────────────────────
let wakeLock = null;
async function acquireWakeLock() {
  try {
    if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen');
  } catch (e) { /* silently ignore */ }
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Show auth screen immediately
  document.getElementById('auth-screen').classList.add('active');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-screen').classList.add('hidden');

  initAuth({
    onLogin: handleLogin,
    onLogout: handleLogout,
    getLang: () => state.lang,
  });

  bindStaticEvents();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW error:', e));
  }

  // PWA install prompt
  let deferredInstallPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const banner = document.getElementById('pwa-banner');
    if (banner) banner.style.display = 'flex';
  });

  document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById('pwa-banner').style.display = 'none';
  });

  document.getElementById('pwa-dismiss-btn')?.addEventListener('click', () => {
    document.getElementById('pwa-banner').style.display = 'none';
  });
});

// ─── AUTH HANDLERS ───────────────────────────────────────────────────────────
async function handleLogin(user, profile) {
  await initApp();
  state.currentUser = user;
  state.userProfile = profile;

  document.getElementById('header-username').textContent = profile.name || user.email;
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-screen').classList.remove('hidden');
  document.getElementById('app-screen').classList.add('active');

  // Check admin
  state.isAdmin = await isAdmin(user.uid);
  document.getElementById('admin-badge').classList.toggle('hidden', !state.isAdmin);
  document.querySelectorAll('.admin-only').forEach(el => el.classList.toggle('hidden', !state.isAdmin));

  // Load data
  await Promise.all([
    loadUserFriends(),
    loadUserRounds(),
    loadCoursesData(),
  ]);

  // Check for resumable active round
  await tryResumeRound();
  applyI18n();
}

function handleLogout() {
  state.currentUser = null;
  state.userProfile = null;
  state.round = null;
  releaseWakeLock();
  document.getElementById('app-screen').classList.add('hidden');
  document.getElementById('app-screen').classList.remove('active');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('auth-screen').classList.add('active');
}

// ─── DATA LOADERS ────────────────────────────────────────────────────────────
async function loadUserFriends() {
  state.friends = await loadFriends(state.currentUser.uid);
  renderFriendsList();
  renderQuickFriends();
}

async function loadUserRounds() {
  try {
    const db = getDB();
    const snap = await getDocs(query(
      collection(db, 'brugere', state.currentUser.uid, 'rounds'),
      orderBy('created', 'desc')
    ));
    state.rounds = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    renderRoundsList();
  } catch (err) {
    console.error('loadUserRounds error:', err);
  }
}

async function loadCoursesData() {
  state.courses = await loadCourses();
  renderCoursesList();
  populateCourseDropdown();
}

// ─── RESUME ACTIVE ROUND ──────────────────────────────────────────────────────
async function tryResumeRound() {
  try {
    const db = getDB();
    const snap = await getDoc(doc(db, 'brugere', state.currentUser.uid, 'active', 'round'));
    if (!snap.exists()) return;
    const data = snap.data();
    const MAX_AGE = 24 * 60 * 60 * 1000;
    const created = data.created?.toMillis ? data.created.toMillis() : Date.now();
    if (Date.now() - created > MAX_AGE) {
      await deleteDoc(doc(db, 'brugere', state.currentUser.uid, 'active', 'round'));
      return;
    }
    if (confirm('Genoptag den igangværende runde?')) {
      state.round = deserializeRound(data);
      showScoringActive();
      renderShooters();
      updateStickyBar();
    }
  } catch (err) {
    console.error('tryResumeRound error:', err);
  }
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tab}`)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.classList.add('active');

  if (tab === 'courses') { loadCoursesData(); }
  if (tab === 'results') { loadUserRounds(); }
  if (tab === 'friends') { loadUserFriends(); }
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
function applyI18n() {
  const t = I18N[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.getElementById('lang-toggle').textContent = state.lang.toUpperCase();
}

// ─── SCORING SETUP ────────────────────────────────────────────────────────────
function populateCourseDropdown() {
  const sel = document.getElementById('course-select');
  sel.innerHTML = `<option value="">— ${state.lang === 'en' ? 'Select course' : 'Vælg bane'} —</option>`;
  state.courses.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.name} (${c.numTargets} mål)`;
    sel.appendChild(opt);
  });
}

function getSetupNumTargets() {
  return Number(document.getElementById('target-count-select').value) || 24;
}

function addParticipant(id, name, isGuest = false) {
  if (document.getElementById(`chip-${id}`)) return;
  const list = document.getElementById('participants-list');
  const chip = document.createElement('div');
  chip.className = 'participant-chip';
  chip.id = `chip-${id}`;
  chip.innerHTML = `<span class="name">${name}</span><button class="remove-btn" data-id="${id}">✕</button>`;
  chip.querySelector('.remove-btn').onclick = () => chip.remove();
  list.appendChild(chip);
}

function getParticipants() {
  return Array.from(document.querySelectorAll('.participant-chip')).map(chip => ({
    id: chip.id.replace('chip-', ''),
    name: chip.querySelector('.name').textContent,
    isGuest: chip.id.startsWith('chip-guest-')
  }));
}

function renderQuickFriends() {
  const container = document.getElementById('quick-friends');
  container.innerHTML = '';
  state.friends.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'quick-friend-btn';
    btn.textContent = f.name;
    btn.onclick = () => addParticipant(f.id, f.name);
    container.appendChild(btn);
  });
}

// ─── START ROUND ─────────────────────────────────────────────────────────────
async function startRound() {
  const name = document.getElementById('round-name').value.trim() || 'Min Skydning';
  const courseId = document.getElementById('course-select').value;
  const numTargets = getSetupNumTargets();
  const startTarget = Number(document.getElementById('start-target-select').value) || 1;
  const gpsAutoFind = document.getElementById('gps-auto-find-toggle').classList.contains('on');
  const gpsTrack = document.getElementById('gps-track-toggle').classList.contains('on');

  const participants = getParticipants();
  // Always include logged-in user first
  const userEntry = { id: state.currentUser.uid, name: state.userProfile.name, isGuest: false };
  const allParts = [userEntry, ...participants.filter(p => p.id !== state.currentUser.uid)];

  let courseName = null;
  if (courseId) {
    state.course = state.courses.find(c => c.id === courseId) || await loadCourse(courseId);
    courseName = state.course?.name;
  }

  const shooters = allParts.map(p => {
    const s = makeShooter(p.id, p.name, p.isGuest);
    normalizeShooterScores(s, numTargets);
    return s;
  });

  let actualStart = startTarget - 1; // 0-indexed

  if (gpsAutoFind && state.course?.targets) {
    try {
      const pos = await getCurrentPosition();
      actualStart = findNearestTarget(state.course.targets, pos);
    } catch (e) { /* fall back to user selection */ }
  }

  state.round = {
    name,
    courseId: courseId || null,
    courseName,
    numTargets,
    startTarget: actualStart + 1,
    currentTarget: actualStart,
    shooters,
    created: Date.now(),
    scoredCount: 0,
    traversalOrder: buildTraversalOrder(actualStart, numTargets),
    traversalPos: 0,
  };

  if (gpsTrack) {
    state.gpsTracking = startTracking(updateGpsBar);
    document.getElementById('gps-bar').classList.toggle('hidden', !state.gpsTracking);
    acquireWakeLock();
  }

  await saveActiveRound();
  showScoringActive();
  renderShooters();
  updateStickyBar();
}

function buildTraversalOrder(start, total) {
  const order = [];
  for (let i = 0; i < total; i++) order.push((start + i) % total);
  return order;
}

// ─── ACTIVE SHOOTING UI ───────────────────────────────────────────────────────
function showScoringActive() {
  document.getElementById('scoring-setup').classList.add('hidden');
  document.getElementById('scoring-active').classList.remove('hidden');
  document.getElementById('scoring-results').classList.add('hidden');
}

function showScoringSetup() {
  document.getElementById('scoring-setup').classList.remove('hidden');
  document.getElementById('scoring-active').classList.add('hidden');
  document.getElementById('scoring-results').classList.add('hidden');
}

function showScoringResults() {
  document.getElementById('scoring-setup').classList.add('hidden');
  document.getElementById('scoring-active').classList.add('hidden');
  document.getElementById('scoring-results').classList.remove('hidden');
}

function getCurrentTargetIndex() {
  return state.round.traversalOrder[state.round.traversalPos];
}

function updateStickyBar() {
  if (!state.round) return;
  const tIdx = getCurrentTargetIndex();
  const targetNum = tIdx + 1;
  const totalTargets = state.round.numTargets;

  document.getElementById('target-num-big').textContent = targetNum;
  document.getElementById('target-num-suffix').textContent = 'af ' + totalTargets;
  document.getElementById('round-name-badge').textContent = state.round.name;

  const scored = countScoredTargets(state.round.shooters, totalTargets);
  const progress = (scored / totalTargets) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Stats
  const allTotals = state.round.shooters.map(s => calcTotal(s.scores));
  const sumAll = allTotals.reduce((a, b) => a + b, 0);
  const totalArrows = state.round.shooters.flatMap(s =>
    s.scores.flat().filter(v => v !== null && v !== undefined)
  ).length;
  const avgAll = totalArrows ? (sumAll / totalArrows).toFixed(1) : '0.0';

  document.getElementById('stat-avg').textContent = totalArrows ? avgAll : '—';
  document.getElementById('stat-total').textContent = sumAll;
  document.getElementById('stat-remaining').textContent = totalTargets - scored;

  // Animal/target name
  const target = state.course?.targets?.[tIdx];
  const animalName = target?.name || `Mål ${targetNum}`;
  const animalEmoji = target?.name ? '' : '🦌';
  document.getElementById('animal-name-display').textContent = animalName || animalEmoji;

  // Target average display
  const avg = calcTargetAverage(state.round.shooters, tIdx);
  const avgEl = document.getElementById('target-avg-display');
  if (avg !== null) {
    avgEl.innerHTML = `Gns. dette mål: <span>${avg}</span>`;
  } else {
    avgEl.textContent = '';
  }

  // Animal image
  const imgEl = document.getElementById('animal-image');
  if (target?.imageUrl) {
    imgEl.src = target.imageUrl;
    imgEl.classList.remove('hidden');
  } else {
    imgEl.classList.add('hidden');
  }

  // Show edit btn for admins with course
  const editBtn = document.getElementById('edit-target-btn');
  if (state.isAdmin && state.round.courseId) {
    editBtn.classList.remove('hidden');
  } else {
    editBtn.classList.add('hidden');
  }

  // NÆSTE/AFSLUT text
  const isLast = state.round.traversalPos === state.round.numTargets - 1;
  document.getElementById('next-btn').textContent = isLast ? 'AFSLUT →' : 'NÆSTE →';
}

function renderShooters() {
  if (!state.round) return;
  const tIdx = getCurrentTargetIndex();
  const container = document.getElementById('shooters-list');
  container.innerHTML = '';

  state.round.shooters.forEach((shooter, sIdx) => {
    const card = document.createElement('div');
    card.className = 'shooter-card';
    const total = calcTotal(shooter.scores);
    const avg = calcAverage(shooter.scores);
    const warn = isBelowThreshold(shooter.scores, state.warnThreshold);
    const row = shooter.scores[tIdx] || [null, null];

    card.innerHTML = `
      <div class="shooter-header">
        <span class="shooter-icon">🎯</span>
        ${warn ? '<span class="warning-dot"></span>' : ''}
        <span class="shooter-name">${shooter.name}</span>
        <div class="shooter-mini-box" style="margin-left:4px;">
          <div class="shooter-mini-label">DETTE</div>
          <div class="shooter-mini-val" id="this-score-${sIdx}">—</div>
        </div>
        <div class="shooter-mini-box">
          <div class="shooter-mini-label">RUNDE</div>
          <div class="shooter-mini-val">${total}</div>
        </div>
      </div>
      <div class="arrows-row">
        ${[0, 1].map(arrowIdx => `
          <div class="arrow-group">
            <div class="arrow-label">🎯 PIL ${arrowIdx + 1}</div>
            <div class="score-btns" data-shooter="${sIdx}" data-arrow="${arrowIdx}">
              ${SCORE_VALUES.map(v => `
                <button class="score-btn ${row[arrowIdx] === v ? `selected-${v}` : ''}"
                  data-val="${v}" data-shooter="${sIdx}" data-arrow="${arrowIdx}">
                  ${v}
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    card.querySelectorAll('.score-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const si = Number(btn.dataset.shooter);
        const ai = Number(btn.dataset.arrow);
        const val = btn.dataset.val === 'M' ? 'M' : Number(btn.dataset.val);
        state.round.shooters[si].scores[tIdx][ai] = val;
        saveActiveRound();
        renderShooters();
        updateStickyBar();
      });
    });

    container.appendChild(card);
  });
}

// ─── GPS BAR ──────────────────────────────────────────────────────────────────
function updateGpsBar({ lat, lng, distance, elapsed }) {
  document.getElementById('gps-time').textContent = formatDuration(elapsed);
  document.getElementById('gps-distance').textContent = formatDistance(distance);
  if (lat && lng) document.getElementById('gps-coord').textContent = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

// ─── SAVE ACTIVE ROUND ────────────────────────────────────────────────────────
async function saveActiveRound() {
  if (!state.round || !state.currentUser) return;
  try {
    const db = getDB();
    const data = serializeRound(state.round);
    data.traversalOrder = state.round.traversalOrder;
    data.traversalPos = state.round.traversalPos;
    data.currentTarget = getCurrentTargetIndex();
    await setDoc(doc(db, 'brugere', state.currentUser.uid, 'active', 'round'), data);
  } catch (err) {
    console.error('saveActiveRound error:', err);
  }
}

// ─── FINISH ROUND ─────────────────────────────────────────────────────────────
let finishTap = 0;
async function finishRound() {
  finishTap++;
  if (finishTap === 1) {
    document.getElementById('finish-now-btn').textContent = '✓ BEKRÆFT AFSLUT';
    setTimeout(() => { finishTap = 0; document.getElementById('finish-now-btn').textContent = '✓ AFSLUT NU'; }, 3000);
    return;
  }
  finishTap = 0;

  let gpsData = {};
  if (state.gpsTracking) {
    gpsData = stopTracking();
    state.gpsTracking = false;
  }
  releaseWakeLock();

  const roundData = {
    ...serializeRound(state.round),
    completed: Date.now(),
    ...gpsData,
  };

  try {
    const db = getDB();
    const ref = await addDoc(collection(db, 'brugere', state.currentUser.uid, 'rounds'), {
      ...roundData,
      created: serverTimestamp(),
    });
    // Add course visit if course was selected
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
    // Remove active round
    await deleteDoc(doc(db, 'brugere', state.currentUser.uid, 'active', 'round'));
  } catch (err) {
    console.error('finishRound error:', err);
  }

  await loadUserRounds();
  showResults(state.round);
  state.round = null;
}

let abortTap = 0;
function abortRound() {
  abortTap++;
  if (abortTap === 1) {
    document.getElementById('abort-btn').textContent = '🗑 BEKRÆFT';
    setTimeout(() => { abortTap = 0; document.getElementById('abort-btn').textContent = '🗑 AFBRYD'; }, 3000);
    return;
  }
  abortTap = 0;
  if (state.gpsTracking) { stopTracking(); state.gpsTracking = false; }
  releaseWakeLock();
  try {
    const db = getDB();
    deleteDoc(doc(db, 'brugere', state.currentUser.uid, 'active', 'round'));
  } catch (e) {}
  state.round = null;
  showScoringSetup();
}

// ─── RESULTS DISPLAY ─────────────────────────────────────────────────────────
function showResults(round) {
  showScoringResults();
  const winner = findWinner(round.shooters);
  document.getElementById('results-winner').innerHTML = `
    <div class="winner-trophy">🏆</div>
    <div class="winner-name">${winner?.name || '—'}</div>
    <div class="winner-score">${winner ? calcTotal(winner.scores) : 0} point</div>
  `;
  document.getElementById('results-table-wrap').innerHTML = buildResultsTable(round);
  document.getElementById('results-distribution').innerHTML = buildDistribution(round);
}

function buildResultsTable(round) {
  const shooters = round.shooters;
  let html = `<div class="results-table-wrap"><table class="results-table">
    <tr><th>Mål</th>${shooters.map(s => `<th>${s.name}</th>`).join('')}</tr>`;
  for (let t = 0; t < round.numTargets; t++) {
    html += `<tr><td class="target-cell">${t + 1}</td>`;
    shooters.forEach(s => {
      const row = s.scores[t] || [null, null];
      const sum = (row[0] !== null && row[0] !== 'M' ? Number(row[0]) : 0) +
                  (row[1] !== null && row[1] !== 'M' ? Number(row[1]) : 0);
      html += `<td>${row.map(v => v === null ? '—' : v).join('/')}<br><small>${sum}</small></td>`;
    });
    html += '</tr>';
  }
  html += `<tr class="total-row"><td class="target-cell">Total</td>
    ${shooters.map(s => `<td>${calcTotal(s.scores)}</td>`).join('')}</tr>
  </table></div>`;
  return html;
}

function buildDistribution(round) {
  let html = '<div class="distribution-grid">';
  round.shooters.forEach(s => {
    const dist = calcDistribution(s.scores);
    html += `<div class="dist-card">
      <div class="dist-name">${s.name}</div>
      ${Object.entries(dist).map(([k, v]) => `
        <div class="dist-row"><span>${k}</span><span>${v}x</span></div>
      `).join('')}
    </div>`;
  });
  html += '</div>';
  return html;
}

// ─── ROUNDS LIST ─────────────────────────────────────────────────────────────
function renderRoundsList() {
  const container = document.getElementById('rounds-list');
  if (!state.rounds.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📊</div>Ingen runder endnu</div>`;
    return;
  }
  container.innerHTML = '';
  state.rounds.forEach((round, idx) => {
    const shooters = (round.shooters || []).map(s => ({
      ...s,
      scores: typeof s.scores === 'string'
        ? s.scores.split(';').map(r => r.split(',').map(v => v === 'M' ? 'M' : Number(v)))
        : (s.scores || [])
    }));
    const winner = shooters.length ? findWinner(shooters) : null;
    const date = round.created?.toDate ? round.created.toDate().toLocaleDateString('da-DK') : '—';
    const card = document.createElement('div');
    card.className = 'round-card';
    card.innerHTML = `
      <div class="round-info">
        <div class="round-name">${round.name}</div>
        <div class="round-meta">${date} · ${round.courseName || round.numTargets + ' mål'}</div>
        <div class="round-winner">🏆 ${winner?.name || '—'} (${winner ? calcTotal(winner.scores) : 0} pt)</div>
      </div>
      <button class="delete-round-btn" data-idx="${idx}">✕</button>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-round-btn')) return;
      showRoundPopup({ ...round, shooters });
    });
    card.querySelector('.delete-round-btn').addEventListener('click', async (e) => {
      e.stopPropagation();
      const btn = e.currentTarget;
      const key = `round-${round.id}`;
      if (!state.deleteConfirm[key]) {
        state.deleteConfirm[key] = true;
        btn.classList.add('confirm');
        btn.textContent = 'Slet?';
        setTimeout(() => { delete state.deleteConfirm[key]; btn.classList.remove('confirm'); btn.textContent = '✕'; }, 3000);
      } else {
        delete state.deleteConfirm[key];
        try {
          const db = getDB();
          await deleteDoc(doc(db, 'brugere', state.currentUser.uid, 'rounds', round.id));
          await loadUserRounds();
        } catch (err) { console.error('delete round error:', err); }
      }
    });
    container.appendChild(card);
  });
}

function showRoundPopup(round) {
  let popup = document.getElementById('round-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'round-popup';
    popup.innerHTML = `<div id="round-popup-content">
      <button id="round-popup-close">✕</button>
      <div id="round-popup-body"></div>
    </div>`;
    document.body.appendChild(popup);
    document.getElementById('round-popup-close').onclick = () => popup.classList.add('hidden');
  }
  popup.classList.remove('hidden');
  document.getElementById('round-popup-body').innerHTML =
    `<h3>${round.name}</h3>` + buildResultsTable(round) + buildDistribution(round);
}

// ─── COURSES UI ───────────────────────────────────────────────────────────────
function renderCoursesList() {
  const container = document.getElementById('courses-list');
  if (!state.courses.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>`;
    return;
  }
  container.innerHTML = '';
  state.courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="course-card-name">${course.name}</div>
      <div class="course-card-meta">${course.numTargets} mål · ${course.location || '—'}</div>
    `;
    card.onclick = () => openCourseDetail(course);
    container.appendChild(card);
  });
}

function openCourseDetail(course) {
  state.currentCourse = course;
  document.getElementById('courses-list-view').classList.add('hidden');
  document.getElementById('course-detail-view').classList.remove('hidden');
  document.getElementById('course-detail-title').textContent = course.name;

  // Switch to map tab
  switchSubtab('map');
  initCourseMap(course);
  renderVisits(course);
  renderCourseEditForm(course);
}

function initCourseMap(course) {
  const mapEl = document.getElementById('course-map');
  if (state.courseMap) { state.courseMap.remove(); state.courseMap = null; }
  state.courseMap = L.map(mapEl, { zoomControl: true });
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Esri', maxZoom: 19 }
  ).addTo(state.courseMap);

  const targets = course.targets || [];
  const bounds = [];
  targets.forEach((t, i) => {
    if (!t.gps) return;
    const { lat, lng } = t.gps;
    bounds.push([lat, lng]);
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i + 1}</div>`,
      iconSize: [28, 28], iconAnchor: [14, 14]
    });
    L.marker([lat, lng], { icon }).addTo(state.courseMap)
      .bindPopup(`<b>${i + 1}. ${t.name || 'Mål'}</b>${t.imageUrl ? `<br><img src="${t.imageUrl}" style="max-width:120px;border-radius:4px;margin-top:4px;" />` : ''}`);
  });
  if (bounds.length) state.courseMap.fitBounds(bounds, { padding: [20, 20] });
  else state.courseMap.setView([55.7, 12.5], 10);
}

function renderVisits(course) {
  const container = document.getElementById('visits-list');
  const visits = course.visits || [];
  if (!visits.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📍</div>Ingen besøg endnu</div>`;
    return;
  }
  container.innerHTML = '';
  visits.forEach((v, idx) => {
    const card = document.createElement('div');
    card.className = 'visit-card';
    card.innerHTML = `
      <div class="visit-header">
        <span class="visit-date">${v.date}</span>
        <div class="visit-actions">
          ${v.gpsRoute ? `<button class="show-route-btn" data-idx="${idx}" title="Vis rute">🗺️</button>` : ''}
          <button class="del-visit-btn" data-idx="${idx}" title="Slet">✕</button>
        </div>
      </div>
      <div class="visit-participants">${(v.participants || []).join(', ')}</div>
      ${v.winner ? `<div>🏆 ${v.winner} (${v.winnerScore} pt)</div>` : ''}
      ${v.gpsDistance ? `<div style="font-size:12px;color:var(--text-muted)">📍 ${formatDistance(v.gpsDistance)} · ⏱ ${formatDuration(v.gpsDuration || 0)}</div>` : ''}
    `;
    card.querySelector('.del-visit-btn').onclick = async (e) => {
      e.stopPropagation();
      const btn = e.currentTarget;
      const key = `visit-${idx}`;
      if (!state.deleteConfirm[key]) {
        state.deleteConfirm[key] = true;
        btn.style.color = 'var(--danger)';
        setTimeout(() => { delete state.deleteConfirm[key]; btn.style.color = ''; }, 3000);
      } else {
        delete state.deleteConfirm[key];
        await removeCourseVisit(course.id, idx);
        state.currentCourse = await loadCourse(course.id);
        renderVisits(state.currentCourse);
      }
    };
    if (v.gpsRoute) {
      card.querySelector('.show-route-btn').onclick = (e) => {
        e.stopPropagation();
        switchSubtab('map');
        showRouteOnMap(parseRoute(v.gpsRoute));
      };
    }
    container.appendChild(card);
  });
}

function showRouteOnMap(points) {
  if (!state.courseMap || !points.length) return;
  if (state.courseMapLayer) { state.courseMap.removeLayer(state.courseMapLayer); }
  state.courseMapLayer = L.polyline(points.map(p => [p.lat, p.lng]), {
    color: '#e8a020', weight: 3, dashArray: '8,4'
  }).addTo(state.courseMap);
  state.courseMap.fitBounds(state.courseMapLayer.getBounds(), { padding: [20, 20] });
}

function renderCourseEditForm(course) {
  const form = document.getElementById('course-edit-form');
  form.innerHTML = `
    <input type="text" id="edit-course-name" value="${course.name}" placeholder="Banenavn" />
    <input type="text" id="edit-course-location" value="${course.location || ''}" placeholder="Lokation" />
    <button id="save-course-btn" class="btn-primary">Gem ændringer</button>
  `;
  document.getElementById('save-course-btn').onclick = async () => {
    const name = document.getElementById('edit-course-name').value.trim();
    const location = document.getElementById('edit-course-location').value.trim();
    if (!name) return;
    await updateCourse(course.id, { name, location });
    await loadCoursesData();
    state.currentCourse.name = name;
    state.currentCourse.location = location;
    document.getElementById('course-detail-title').textContent = name;
    alert('Gemt!');
  };
}

function switchSubtab(name) {
  document.querySelectorAll('.subtab').forEach(b => b.classList.toggle('active', b.dataset.subtab === name));
  document.querySelectorAll('.subtab-content').forEach(el => {
    const match = el.id === `subtab-${name}`;
    el.classList.toggle('active', match);
    el.classList.toggle('hidden', !match);
  });
  if (name === 'map' && state.courseMap) {
    setTimeout(() => state.courseMap.invalidateSize(), 100);
  }
}

// ─── FRIENDS UI ───────────────────────────────────────────────────────────────
function renderFriendsList() {
  const container = document.getElementById('friends-list');
  if (!state.friends.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">👥</div>Ingen venner endnu</div>`;
    return;
  }
  container.innerHTML = '';
  state.friends.forEach(f => {
    const card = document.createElement('div');
    card.className = 'friend-card';
    card.innerHTML = `
      <div class="friend-info">
        <div class="friend-name">${f.name}</div>
        <div class="friend-meta">${[f.email, f.phone, f.club, f.bowType].filter(Boolean).join(' · ')}</div>
      </div>
      <div class="friend-actions">
        <button class="btn-icon edit-friend-btn" data-id="${f.id}">✏️</button>
        <button class="btn-icon del-friend-btn" data-id="${f.id}">🗑</button>
      </div>
    `;
    card.querySelector('.edit-friend-btn').onclick = () => openFriendModal(f);
    card.querySelector('.del-friend-btn').onclick = async () => {
      if (confirm(`Slet ${f.name}?`)) {
        await deleteFriend(state.currentUser.uid, f.id);
        await loadUserFriends();
      }
    };
    container.appendChild(card);
  });
}

function openFriendModal(friend = null) {
  state.editFriendId = friend?.id || null;
  document.getElementById('friend-modal-title').textContent = friend ? 'Rediger ven' : 'Tilføj ven';
  document.getElementById('friend-name').value = friend?.name || '';
  document.getElementById('friend-email').value = friend?.email || '';
  document.getElementById('friend-phone').value = friend?.phone || '';
  document.getElementById('friend-club').value = friend?.club || '';
  document.getElementById('friend-bow-type').value = friend?.bowType || '';
  document.getElementById('friend-modal').classList.remove('hidden');
}

async function saveFriendFromModal() {
  const data = {
    name: document.getElementById('friend-name').value.trim(),
    email: document.getElementById('friend-email').value.trim(),
    phone: document.getElementById('friend-phone').value.trim(),
    club: document.getElementById('friend-club').value.trim(),
    bowType: document.getElementById('friend-bow-type').value,
  };
  if (!data.name) return;
  await saveFriend(state.currentUser.uid, data, state.editFriendId);
  document.getElementById('friend-modal').classList.add('hidden');
  await loadUserFriends();
}

// ─── ADMIN UI ─────────────────────────────────────────────────────────────────
async function renderAdminSection() {
  if (!state.isAdmin) return;
  document.getElementById('admin-section').classList.remove('hidden');
  const users = await loadAllUsers();
  const container = document.getElementById('users-list');
  container.innerHTML = '';
  users.forEach(u => {
    const row = document.createElement('div');
    row.className = 'user-row';
    const date = u.created?.toDate ? u.created.toDate().toLocaleDateString('da-DK') : '—';
    row.innerHTML = `
      <span class="user-name">${u.name || '—'}</span>
      <span class="user-email">${u.email}</span>
      <span class="user-date">${date}</span>
    `;
    container.appendChild(row);
  });
}

// ─── QR CODE ─────────────────────────────────────────────────────────────────
function showQrModal() {
  document.getElementById('qr-modal').classList.remove('hidden');
  const canvas = document.getElementById('qr-canvas');
  canvas.innerHTML = '';
  const url = window.location.origin + window.location.pathname;
  if (typeof QRCode !== 'undefined') {
    new QRCode(canvas, {
      text: url,
      width: 200, height: 200,
      colorDark: '#1a3a1a',
      colorLight: '#ffffff',
    });
  }
}

// ─── BIND ALL STATIC EVENTS ───────────────────────────────────────────────────
function bindStaticEvents() {
  // Tab navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    state.lang = state.lang === 'da' ? 'en' : 'da';
    applyI18n();
  });

  // Logo → QR
  document.getElementById('logo-btn').addEventListener('click', showQrModal);
  document.getElementById('logo-btn-icon').addEventListener('click', showQrModal);
  document.getElementById('close-qr-btn').addEventListener('click', () => {
    document.getElementById('qr-modal').classList.add('hidden');
  });

  // Target count buttons in setup
  document.getElementById('target-count-select').addEventListener('change', (e) => {
    updateStartTargetDropdown(Number(e.target.value));
  });
  updateStartTargetDropdown(24);

  // Course select → update target count
  document.getElementById('course-select').addEventListener('change', (e) => {
    if (!e.target.value) {
      updateStartTargetDropdown(Number(document.getElementById('target-count-select').value) || 24);
      return;
    }
    const course = state.courses.find(c => c.id === e.target.value);
    if (course) updateStartTargetDropdown(course.numTargets);
  });

  // Friend search autocomplete
  document.getElementById('friend-search').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const list = document.getElementById('friend-autocomplete');
    if (!val) { list.classList.add('hidden'); return; }
    const matches = state.friends.filter(f => f.name.toLowerCase().includes(val));
    if (!matches.length) { list.classList.add('hidden'); return; }
    list.innerHTML = matches.map(f =>
      `<div class="autocomplete-item" data-id="${f.id}" data-name="${f.name}">${f.name}</div>`
    ).join('');
    list.classList.remove('hidden');
    list.querySelectorAll('.autocomplete-item').forEach(item => {
      item.onclick = () => {
        addParticipant(item.dataset.id, item.dataset.name);
        e.target.value = '';
        list.classList.add('hidden');
      };
    });
  });

  // Add guest
  document.getElementById('add-guest-btn').addEventListener('click', () => {
    document.getElementById('guest-modal').classList.remove('hidden');
    document.getElementById('guest-name-input').value = '';
  });
  document.getElementById('guest-confirm-btn').addEventListener('click', () => {
    const name = document.getElementById('guest-name-input').value.trim();
    if (!name) return;
    addParticipant(`guest-${Date.now()}`, name, true);
    document.getElementById('guest-modal').classList.add('hidden');
  });
  document.getElementById('guest-cancel-btn').addEventListener('click', () => {
    document.getElementById('guest-modal').classList.add('hidden');
  });

  // Start round
  document.getElementById('start-round-btn').addEventListener('click', startRound);

  // Shooting navigation
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (!state.round) return;
    if (state.round.traversalPos > 0) {
      state.round.traversalPos--;
      saveActiveRound();
      renderShooters();
      updateStickyBar();
      document.getElementById('shooting-scroll-area').scrollTop = 0;
    }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    if (!state.round) return;
    if (state.round.traversalPos < state.round.numTargets - 1) {
      state.round.traversalPos++;
      saveActiveRound();
      renderShooters();
      updateStickyBar();
      document.getElementById('shooting-scroll-area').scrollTop = 0;
    } else {
      finishRound();
    }
  });

  document.getElementById('finish-now-btn').addEventListener('click', finishRound);
  document.getElementById('abort-btn').addEventListener('click', abortRound);

  // Skip
  document.getElementById('skip-btn').addEventListener('click', () => {
    document.getElementById('skip-target-input').value = '';
    document.getElementById('skip-target-input').max = state.round?.numTargets || 30;
    document.getElementById('skip-modal').classList.remove('hidden');
  });
  document.getElementById('skip-confirm-btn').addEventListener('click', () => {
    const n = Number(document.getElementById('skip-target-input').value);
    if (!state.round || n < 1 || n > state.round.numTargets) return;
    // Find position in traversal order
    const tIdx = n - 1;
    const pos = state.round.traversalOrder.indexOf(tIdx);
    if (pos !== -1) state.round.traversalPos = pos;
    document.getElementById('skip-modal').classList.add('hidden');
    renderShooters();
    updateStickyBar();
  });
  document.getElementById('skip-cancel-btn').addEventListener('click', () => {
    document.getElementById('skip-modal').classList.add('hidden');
  });

  // GPS pause
  // Toggle switches
  document.getElementById('gps-auto-find-toggle').addEventListener('click', (e) => { e.currentTarget.classList.toggle('on'); });
  document.getElementById('gps-track-toggle').addEventListener('click', (e) => { e.currentTarget.classList.toggle('on'); });

  document.getElementById('gps-pause-btn').addEventListener('click', () => {
    state.gpsPaused = togglePause();
    document.getElementById('gps-pause-btn').textContent = state.gpsPaused ? '▶' : '⏸';
  });

  // Edit target
  document.getElementById('edit-target-btn').addEventListener('click', () => {
    const tIdx = getCurrentTargetIndex();
    const target = state.course?.targets?.[tIdx];
    document.getElementById('edit-target-name').value = target?.name || '';
    document.getElementById('edit-target-panel').classList.remove('hidden');
  });
  document.getElementById('edit-cancel-btn').addEventListener('click', () => {
    document.getElementById('edit-target-panel').classList.add('hidden');
  });
  document.getElementById('edit-photo-btn').addEventListener('click', () => {
    document.getElementById('photo-input').click();
  });
  document.getElementById('photo-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await compressImage(file);
    const tIdx = getCurrentTargetIndex();
    try {
      const url = await uploadTargetImage(state.round.courseId, tIdx, base64);
      await updateTarget(state.round.courseId, tIdx, { imageUrl: url });
      if (state.course?.targets) state.course.targets[tIdx].imageUrl = url;
      updateStickyBar();
    } catch (err) { alert('Fejl ved upload: ' + err.message); }
  });
  document.getElementById('edit-gps-btn').addEventListener('click', async () => {
    try {
      const pos = await getCurrentPosition();
      const tIdx = getCurrentTargetIndex();
      await updateTarget(state.round.courseId, tIdx, { gps: pos });
      if (state.course?.targets) state.course.targets[tIdx].gps = pos;
      alert('GPS gemt!');
    } catch (err) { alert('GPS fejl: ' + err.message); }
  });
  document.getElementById('edit-save-btn').addEventListener('click', async () => {
    const name = document.getElementById('edit-target-name').value.trim();
    const tIdx = getCurrentTargetIndex();
    if (state.round.courseId) {
      await updateTarget(state.round.courseId, tIdx, { name });
      if (state.course?.targets) state.course.targets[tIdx].name = name;
    }
    document.getElementById('edit-target-panel').classList.add('hidden');
    updateStickyBar();
  });

  // Animal image fullscreen
  document.getElementById('animal-image').addEventListener('click', () => {
    const src = document.getElementById('animal-image').src;
    document.getElementById('fullscreen-image').src = src;
    document.getElementById('image-fullscreen').classList.remove('hidden');
  });
  document.getElementById('close-fullscreen-btn').addEventListener('click', () => {
    document.getElementById('image-fullscreen').classList.add('hidden');
  });

  // Results buttons
  document.getElementById('new-round-btn').addEventListener('click', () => {
    showScoringSetup();
  });
  document.getElementById('send-email-btn').addEventListener('click', () => {
    alert(state.lang === 'en' ? 'Email functionality requires backend setup.' : 'Email-funktion kræver backend-opsætning.');
  });

  // Courses create
  document.getElementById('create-course-btn').addEventListener('click', () => {
    document.getElementById('create-course-modal').classList.remove('hidden');
  });
  document.getElementById('create-course-cancel-btn').addEventListener('click', () => {
    document.getElementById('create-course-modal').classList.add('hidden');
  });

  document.getElementById('create-course-confirm-btn').addEventListener('click', async () => {
    const name = document.getElementById('new-course-name').value.trim();
    const location = document.getElementById('new-course-location').value.trim();
    const num = Number(document.getElementById('new-course-targets-select').value) || 24;
    if (!name) return;
    try {
      await createCourse(name, num, location);
      document.getElementById('create-course-modal').classList.add('hidden');
      document.getElementById('new-course-name').value = '';
      await loadCoursesData();
    } catch (err) { alert('Fejl: ' + err.message); }
  });

  // Course back
  document.getElementById('back-to-courses-btn').addEventListener('click', () => {
    document.getElementById('courses-list-view').classList.remove('hidden');
    document.getElementById('course-detail-view').classList.add('hidden');
    if (state.courseMap) { state.courseMap.remove(); state.courseMap = null; }
  });

  // Course subtabs
  document.querySelectorAll('.subtab').forEach(btn => {
    btn.addEventListener('click', () => switchSubtab(btn.dataset.subtab));
  });

  // Show my position toggle
  document.getElementById('show-my-pos-toggle').addEventListener('click', async (e) => {
    const el = e.currentTarget; el.classList.toggle('on');
    if (!state.courseMap) return;
    if (el.classList.contains('on')) {
      try {
        const pos = await getCurrentPosition();
        L.circle([pos.lat, pos.lng], { radius: 10, color: '#2a7ae8', fillColor: '#2a7ae8', fillOpacity: 0.7 }).addTo(state.courseMap);
        state.courseMap.panTo([pos.lat, pos.lng]);
      } catch (err) { alert('GPS ikke tilgængeligt'); el.classList.remove('on'); }
    }
  });

  // Delete course
  document.getElementById('delete-course-btn').addEventListener('click', async () => {
    if (!state.currentCourse) return;
    if (!confirm(`Slet banen "${state.currentCourse.name}"?`)) return;
    try {
      await deleteCourse(state.currentCourse.id);
      document.getElementById('courses-list-view').classList.remove('hidden');
      document.getElementById('course-detail-view').classList.add('hidden');
      await loadCoursesData();
    } catch (err) { alert('Fejl: ' + err.message); }
  });

  // Friends tab
  document.getElementById('add-friend-btn').addEventListener('click', () => openFriendModal());
  document.getElementById('save-friend-btn').addEventListener('click', saveFriendFromModal);
  document.getElementById('cancel-friend-btn').addEventListener('click', () => {
    document.getElementById('friend-modal').classList.add('hidden');
  });

  // Admin - add admin
  document.getElementById('add-admin-btn').addEventListener('click', async () => {
    const email = document.getElementById('admin-email-input').value.trim();
    if (!email) return;
    const user = await findUserByEmail(email);
    if (!user) { alert('Bruger ikke fundet'); return; }
    await addAdmin(user.uid, email);
    alert(`${user.name || email} er nu admin`);
    document.getElementById('admin-email-input').value = '';
  });

  // Tab change → trigger admin section render
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.tab === 'friends') renderAdminSection();
    });
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });
}

function updateStartTargetDropdown(numTargets) {
  const sel = document.getElementById('start-target-select');
  sel.innerHTML = '';
  for (let i = 1; i <= numTargets; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  }
}
