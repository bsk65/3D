// js/burn-sound.js — Lyd til "Afbrænd", syntetiseret live med Web Audio, så
// der ingen lydfiler er (ingen download, ingen ophavsret):
//   • et "woosh" når ilden antændes
//   • brølende ild (filtreret støj), der vokser mod toppen og dør ud
//   • knitren/knald med stigende tæthed
//   • en dyb, dæmonisk latter ("MWAA-HA-HA-HA-HA-HAAAA") med ekko, når
//     ilden topper — formant-syntese af vokalerne med sub-oktav og knurren.
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

  // ── Dæmonisk latter ──
  laugh(ac,master,tPeak-0.35)
}

export function playBurnSound(opts){
  const AC=window.AudioContext||window.webkitAudioContext
  if(!AC)return
  let ac
  try{ac=new AC()}catch(e){return}
  try{ac.resume?.()}catch(e){}
  buildBurnSound(ac,ac.destination,{...opts,start:ac.currentTime+0.03})
  // Luk konteksten når alt har spillet færdigt (frigiver lydhardwaren).
  setTimeout(()=>{try{ac.close()}catch(e){}},((opts?.fadeAt??3.6)+5)*1000)
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
function distCurve(k){
  const n=1024,c=new Float32Array(n)
  for(let i=0;i<n;i++){const x=i*2/n-1;c[i]=(1+k)*x/(1+k*Math.abs(x))}
  return c
}

// Formanter (Hz) for en dyb mandestemme — sænket ~15% for et "større" svælg.
const VOWEL={
  u:[260,700,2100],
  a:[620,930,2100],
  o:[480,720,2050]
}

function laugh(ac,out,start){
  // Efterbehandling: let forvrængning + mørkt ekko ("hule")
  const pre=ac.createGain();pre.gain.value=2.2
  const shaper=ac.createWaveShaper();shaper.curve=distCurve(6);shaper.oversample='2x'
  const post=ac.createGain();post.gain.value=0.9
  const delay=ac.createDelay(1);delay.delayTime.value=0.26
  const fb=ac.createGain();fb.gain.value=0.42
  const dark=ac.createBiquadFilter();dark.type='lowpass';dark.frequency.value=1800
  const wet=ac.createGain();wet.gain.value=0.55
  pre.connect(shaper);shaper.connect(post);post.connect(out)
  post.connect(delay);delay.connect(dark);dark.connect(fb);fb.connect(delay);dark.connect(wet);wet.connect(out)

  // Formantbank (3 parallelle båndpas), som vokalen glider imellem
  const forms=[0,1,2].map(i=>{
    const f=ac.createBiquadFilter();f.type='bandpass';f.Q.value=[7,9,11][i]
    const g=ac.createGain();g.gain.value=[3.2,2.0,0.9][i]
    f.connect(g);g.connect(pre)
    return f
  })
  const setVowel=(v,t,glide=0.05)=>forms.forEach((f,i)=>{
    f.frequency.setTargetAtTime(VOWEL[v][i],t,glide)
  })

  // Stemmekilde: to let forstemte savtakker + sub-oktav-firkant
  const voice=ac.createGain();voice.gain.value=0
  const fry=ac.createGain();fry.gain.value=1          // knurren (amplitudemod.)
  const oscs=[['sawtooth',1,0],['sawtooth',1,14],['square',0.5,0]].map(([type,mul,det])=>{
    const o=ac.createOscillator();o.type=type;o.detune.value=det
    const g=ac.createGain();g.gain.value=type==='square'?0.45:0.5
    o.connect(g);g.connect(fry);o._mul=mul
    return o
  })
  fry.connect(voice);forms.forEach(f=>voice.connect(f))
  const growl=ac.createOscillator();growl.frequency.value=31
  const growlG=ac.createGain();growlG.gain.value=0.45
  growl.connect(growlG);growlG.connect(fry.gain)

  // Aspiration ("h") — støj gennem samme formanter
  const hSrc=loopNoise(ac,makeNoise(ac,1))
  const hGain=ac.createGain();hGain.gain.value=0
  hSrc.connect(hGain);forms.forEach(f=>hGain.connect(f))

  const setF0=(f,t,glideTo,dur)=>oscs.forEach(o=>{
    o.frequency.setValueAtTime(f*o._mul,t)
    o.frequency.exponentialRampToValueAtTime(glideTo*o._mul,t+dur)
  })

  // Stavelser: [vokal, start-vokal, varighed, pause efter, f0 start, f0 slut, h?]
  const syl=[
    ['a','u',0.55,0.10,92,84,false],   // "MWAA"
    ['a','a',0.17,0.06,118,104,true],  // HA
    ['a','a',0.17,0.06,114,100,true],  // HA
    ['a','a',0.17,0.06,108,95,true],   // HA
    ['a','a',0.17,0.06,102,90,true],   // HA
    ['a','a',0.17,0.07,96,84,true],    // HA
    ['o','a',1.10,0,   90,58,true]     // HAAAOOO
  ]
  let t=start
  setVowel('u',t,0.001)
  for(const [v,v0,dur,gap,f0,f1,h] of syl){
    const on=h?0.05:0.02
    if(h){
      hGain.gain.setValueAtTime(0,t)
      hGain.gain.linearRampToValueAtTime(0.5,t+0.012)
      hGain.gain.linearRampToValueAtTime(0,t+on+0.02)
    }
    setVowel(v0,t,0.005);setVowel(v,t+on,dur*0.25)
    setF0(f0,t+on,f1,dur)
    voice.gain.setValueAtTime(0,t+on*0.6)
    voice.gain.linearRampToValueAtTime(1,t+on+0.03)
    voice.gain.setValueAtTime(1,t+on+dur*0.55)
    voice.gain.exponentialRampToValueAtTime(0.001,t+on+dur)
    t+=on+dur+gap
  }
  // Langsom vibrato på det sidste lange "HAAAOOO"
  const vib=ac.createOscillator();vib.frequency.value=5.5
  const vibG=ac.createGain();vibG.gain.setValueAtTime(0,start);vibG.gain.setValueAtTime(40,t-1.0)
  vib.connect(vibG);oscs.forEach(o=>vibG.connect(o.detune))

  const end=t+0.1
  ;[...oscs,growl,vib].forEach(o=>{o.start(start);o.stop(end)})
  hSrc.start(start);hSrc.stop(end)
}
