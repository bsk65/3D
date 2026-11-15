// js/burn-sound.js — Lyd til "Afbrænd", syntetiseret live med Web Audio, så
// der ingen lydfiler er (ingen download, ingen ophavsret):
//   • et "woosh" når ilden antændes
//   • brølende ild (filtreret støj), der vokser mod toppen og dør ud
//   • knitren/knald med stigende tæthed
//
// playBurnSound() skal kaldes direkte fra et klik (browsere — især iOS —
// tillader kun lyd startet af en brugerhandling). På iPhone er Web Audio
// lydløs, når ringe-/lydløs-knappen står på lydløs.

// buildBurnSound er adskilt fra AudioContext-oprettelsen, så den også kan
// renderes "offline" (OfflineAudioContext) til test.
export function buildBurnSound(ac,dest,{start=0,peakAt=2.9,fadeAt=3.6,fadeDur=1.3}={}){
  const comp=ac.createDynamicsCompressor()
  comp.threshold.value=-16;comp.knee.value=6;comp.ratio.value=8
  comp.attack.value=0.003;comp.release.value=0.2
  const master=ac.createGain();master.gain.value=0.95
  master.connect(comp);comp.connect(dest)

  const noise=makeNoise(ac,2)
  const t0=start, tPeak=t0+peakAt, tFade=t0+fadeAt, tEnd=tFade+fadeDur

  // ── Woosh ved antændelse ──
  {
    const src=loopNoise(ac,noise)
    const bp=ac.createBiquadFilter();bp.type='bandpass';bp.Q.value=1.2
    bp.frequency.setValueAtTime(150,t0);bp.frequency.exponentialRampToValueAtTime(2200,t0+0.7)
    const g=ac.createGain();g.gain.setValueAtTime(0,t0)
    g.gain.linearRampToValueAtTime(0.9,t0+0.25);g.gain.exponentialRampToValueAtTime(0.001,t0+1.1)
    src.connect(bp);bp.connect(g);g.connect(master)
    src.start(t0);src.stop(t0+1.2)
  }

  // ── Brølende ild: mellemfrekvent sus + dyb rumlen, med flakker-LFO ──
  {
    const src=loopNoise(ac,noise)
    const lp=ac.createBiquadFilter();lp.type='lowpass';lp.Q.value=0.7
    lp.frequency.setValueAtTime(350,t0);lp.frequency.linearRampToValueAtTime(1800,tPeak)
    lp.frequency.linearRampToValueAtTime(500,tEnd)
    const g=ac.createGain();envelope(g.gain,t0,tPeak,tFade,tEnd,0.55)
    const flick=ac.createGain();flick.gain.value=1
    const lfo=ac.createOscillator();lfo.frequency.value=6.5
    const lfoG=ac.createGain();lfoG.gain.value=0.35
    lfo.connect(lfoG);lfoG.connect(flick.gain)
    src.connect(lp);lp.connect(flick);flick.connect(g);g.connect(master)
    src.start(t0);src.stop(tEnd+0.1);lfo.start(t0);lfo.stop(tEnd+0.1)

    const src2=loopNoise(ac,noise,0.7)
    const lp2=ac.createBiquadFilter();lp2.type='lowpass';lp2.frequency.value=140;lp2.Q.value=1
    const g2=ac.createGain();envelope(g2.gain,t0,tPeak,tFade,tEnd,1.4)
    src2.connect(lp2);lp2.connect(g2);g2.connect(master)
    src2.start(t0);src2.stop(tEnd+0.1)
  }

  // ── Knitren: korte højpas-filtrerede støjknald, tættere mod toppen ──
  {
    let t=t0+0.15
    while(t<tEnd){
      const k=Math.min(1,(t-t0)/(peakAt))
      const fadeK=t>tFade?Math.max(0,1-(t-tFade)/fadeDur):1
      const src=ac.createBufferSource();src.buffer=noise
      const hp=ac.createBiquadFilter();hp.type='highpass';hp.frequency.value=1200+Math.random()*3500
      const g=ac.createGain()
      const len=0.004+Math.random()*0.03, amp=(0.25+Math.random()*0.75)*fadeK*(0.5+0.5*k)
      g.gain.setValueAtTime(amp,t);g.gain.exponentialRampToValueAtTime(0.0005,t+len)
      src.connect(hp);hp.connect(g);g.connect(master)
      src.start(t,Math.random()*1.5,len+0.01)
      // Pause til næste knald: 6/s i starten → ~45/s ved toppen
      t+=-Math.log(1-Math.random())/(6+39*k)
    }
  }
}

export function playBurnSound(opts){
  const AC=window.AudioContext||window.webkitAudioContext
  if(!AC)return
  let ac
  try{ac=new AC()}catch(e){return}
  try{ac.resume?.()}catch(e){}
  buildBurnSound(ac,ac.destination,{...opts,start:ac.currentTime+0.03})
  // Luk konteksten når alt har spillet færdigt (frigiver lydhardwaren).
  setTimeout(()=>{try{ac.close()}catch(e){}},((opts?.fadeAt??3.6)+(opts?.fadeDur??1.3)+1)*1000)
}

// ─── hjælpere ───────────────────────────────────────────────────────────────
function makeNoise(ac,sec){
  const b=ac.createBuffer(1,Math.round(ac.sampleRate*sec),ac.sampleRate)
  const d=b.getChannelData(0)
  for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1
  return b
}
function loopNoise(ac,buf,rate=1){
  const s=ac.createBufferSource();s.buffer=buf;s.loop=true;s.playbackRate.value=rate
  return s
}
// Vokser til top ved tPeak, holder til tFade, dør ud til tEnd.
function envelope(param,t0,tPeak,tFade,tEnd,peak){
  param.setValueAtTime(0.0001,t0)
  param.linearRampToValueAtTime(peak*0.35,t0+0.4)
  param.linearRampToValueAtTime(peak,tPeak)
  param.setValueAtTime(peak,tFade)
  param.linearRampToValueAtTime(0.0001,tEnd)
}
