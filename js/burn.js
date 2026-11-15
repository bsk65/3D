// js/burn.js — "Afbrænd"-effekten: en fuldskærms-brand, mens det brændende
// element forkuller og smuldrer. Ren visuel effekt — ingen data/Firebase her;
// kalderen sletter selv (typisk i onPeak, når ilden dækker hele skærmen).
//
// Ilden er et lav-opløst "varmefelt" (klassisk demoscene-ild): bundrækken er
// glødende, og hver celle løfter sin varme én række op med lidt tilfældigt
// sidevind og tilfældigt varmetab. Det giver flakkende flammetunger, som
// skaleres blødt op til fuld skærm. Varmetabet sænkes over tid, så flammerne
// vokser fra bunden og op over hele skærmen. Gnister tegnes ovenpå.

import { playBurnSound } from './burn-sound.js'

const CELL=5            // pixels pr. varmecelle (lavere = skarpere, men tungere)

// Farveskala varme 0..255 → RGBA (gennemsigtig → mørkerød → orange → gul → hvid)
function buildPalette(){
  const pal=new Uint32Array(256)
  const stops=[
    [0,   0,  0,  0,  0],
    [0.12,60, 0,  0,  90],
    [0.30,170,20, 0,  210],
    [0.50,235,80, 5,  245],
    [0.70,255,150,20, 255],
    [0.88,255,215,90, 255],
    [1,   255,250,220,255]
  ]
  for(let i=0;i<256;i++){
    const t=i/255
    let k=0;while(k<stops.length-2&&t>stops[k+1][0])k++
    const a=stops[k],b=stops[k+1],f=(t-a[0])/(b[0]-a[0])
    const c=j=>Math.round(a[j]+(b[j]-a[j])*f)
    // ImageData er RGBA i hukommelsen = ABGR som little-endian Uint32
    pal[i]=(c(4)<<24|c(3)<<16|c(2)<<8|c(1))>>>0
  }
  return pal
}

function makeSpark(){
  const c=document.createElement('canvas');c.width=c.height=32
  const x=c.getContext('2d')
  const gr=x.createRadialGradient(16,16,0,16,16,16)
  gr.addColorStop(0,'rgba(255,240,180,1)')
  gr.addColorStop(0.3,'rgba(255,160,40,0.8)')
  gr.addColorStop(1,'rgba(255,80,0,0)')
  x.fillStyle=gr;x.fillRect(0,0,32,32)
  return c
}

// Afspiller branden. targetEl forkuller/smuldrer, shakeEl ryster.
// onPeak kaldes når ilden fylder skærmen; promise resolver når alt er væk.
export function playBurnEffect(targetEl,{shakeEl=null,onPeak=null}={}){
  return new Promise(resolve=>{
    const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const DUR=reduce?1200:3600, FADE=reduce?400:1300
    const ov=document.createElement('div');ov.className='burn-ov'
    const glow=document.createElement('div');glow.className='burn-glow'
    const cv=document.createElement('canvas');cv.className='burn-canvas'
    const flash=document.createElement('div');flash.className='burn-flash'
    ov.append(glow,cv,flash);document.body.appendChild(ov)
    try{playBurnSound({peakAt:DUR*0.8/1000,fadeAt:DUR/1000,fadeDur:FADE/1000})}catch(e){console.warn(e)}
    targetEl?.classList.add('burning')
    if(!reduce)shakeEl?.classList.add('burn-shake')
    try{navigator.vibrate?.([80,40,160,60,300,80,500])}catch(e){}

    const W=cv.width=window.innerWidth, H=cv.height=window.innerHeight
    const ctx=cv.getContext('2d')
    const cw=Math.ceil(W/CELL), ch=Math.ceil(H/CELL)+2
    const heat=new Uint8Array(cw*ch)
    const fireCv=document.createElement('canvas');fireCv.width=cw;fireCv.height=ch
    const fctx=fireCv.getContext('2d')
    const img=fctx.createImageData(cw,ch)
    const px=new Uint32Array(img.data.buffer)
    const pal=buildPalette()
    const spark=makeSpark()
    const sparks=[]
    // Pr. kolonne: hvor let varmen slipper (lav = høj flammetunge). Driver
    // tilfældigt og udglattes, så der opstår høje, vilde tunger hist og her.
    const colMul=new Float32Array(cw).fill(1)
    let gust=0
    const rect=targetEl?.getBoundingClientRect()
    const box=rect&&{x0:Math.max(0,rect.left/CELL|0),x1:Math.min(cw-1,rect.right/CELL|0),y0:Math.max(0,rect.top/CELL|0),y1:Math.min(ch-1,rect.bottom/CELL|0)}

    const t0=performance.now()
    let peaked=false, ending=false, last=t0, acc=0, source=255

    function finish(){
      if(ending)return
      ending=true
      if(!peaked){peaked=true;try{onPeak?.()}catch(e){console.warn(e)}}
      source=0   // sluk bundglød — flammerne løfter sig og dør ud af sig selv
      ov.classList.add('out')
      setTimeout(()=>{
        ov.remove();targetEl?.classList.remove('burning');shakeEl?.classList.remove('burn-shake')
        resolve()
      },FADE)
    }
    // Sikkerhedsnet: uanset hvad der sker i tegne-loopet, slutter effekten.
    setTimeout(finish,DUR+500)

    // Ét simuleringsskridt. decay = maks. varmetab pr. række (styrer højden).
    function step(decay,p){
      const base=(ch-1)*cw
      for(let x=0;x<cw;x++)heat[base+x]=source?Math.max(0,source-(Math.random()*40|0)):0
      // Det brændende kort: dets underkant bliver en ekstra glødelinje, så
      // flammer slikker op gennem kortet (det forkuller samtidig via CSS).
      if(box&&!ending&&p>0.1){
        const lvl=Math.min(255,(p-0.1)*900), row=box.y1*cw
        for(let x=box.x0;x<=box.x1;x++){const v=Math.max(0,lvl-(Math.random()*60|0));if(v>heat[row+x])heat[row+x]=v}
      }
      // Kolonne-variation: tilfældig drift + udglatning
      for(let x=0;x<cw;x++){let m=colMul[x]+(Math.random()-0.5)*0.18;colMul[x]=m<0.3?0.3:m>1.5?1.5:m}
      for(let x=1;x<cw-1;x++)colMul[x]=(colMul[x-1]+colMul[x]*2+colMul[x+1])*0.25
      // Ildkugler: pludselige opblus der stiger op og brænder ud
      if(!ending&&p>0.25&&Math.random()<0.12+p*0.2){
        const cx=Math.random()*cw|0, cy=(ch*(0.35+Math.random()*0.6))|0, rad=3+(Math.random()*5|0)
        for(let yy=-rad;yy<=rad;yy++)for(let xx=-rad;xx<=rad;xx++){
          if(xx*xx+yy*yy>rad*rad)continue
          const X=cx+xx,Y=cy+yy;if(X<0||X>=cw||Y<0||Y>=ch)continue
          const i=Y*cw+X;heat[i]=Math.max(heat[i],230+(Math.random()*25|0))
        }
      }
      const gAbs=Math.abs(gust), gDir=gust<0?-1:1
      for(let y=1;y<ch;y++){
        const row=y*cw, up=row-cw
        for(let x=0;x<cw;x++){
          const v=heat[row+x]
          if(!v){ // kold celle: køl blot cellen over lidt af
            const u=up+x; if(heat[u])heat[u]=heat[u]>8?heat[u]-8:0; continue
          }
          const r=Math.random()
          let dx=x+((r*3|0)-1)            // tilfældigt sidevind −1..1
          if(Math.random()<gAbs)dx+=gDir   // + vindstød
          if(dx<0)dx=0;else if(dx>=cw)dx=cw-1
          const d=(r*decay*colMul[x])|0
          heat[up+dx]=v>d?v-d:0
        }
      }
    }

    function render(){
      for(let i=0;i<px.length;i++)px[i]=pal[heat[i]]
      fctx.putImageData(img,0,0)
      ctx.clearRect(0,0,W,H)
      ctx.imageSmoothingEnabled=true
      ctx.globalCompositeOperation='source-over'
      ctx.drawImage(fireCv,0,0,cw,ch,0,0,cw*CELL,ch*CELL)
      ctx.globalCompositeOperation='lighter'
      for(const s of sparks){
        ctx.globalAlpha=Math.max(0,1-s.life/s.max)
        ctx.drawImage(spark,s.x-s.size/2,s.y-s.size/2,s.size,s.size)
      }
      ctx.globalAlpha=1
    }

    function frame(now){
      try{draw(now)}catch(e){console.warn(e);finish();return}
      if(ov.isConnected)requestAnimationFrame(frame)
    }

    function draw(now){
      // rAF's tidsstempel kan ligge FØR t0 (frame-start) — clamp, ellers bliver
      // tiden negativ.
      now=Math.max(now,t0,last)
      const p=(now-t0)/DUR
      const dtMs=Math.min(50,now-last);last=now
      if(!peaked&&p>=0.8){
        peaked=true;flash.classList.add('on')
        try{navigator.vibrate?.([250,60,500])}catch(e){}
        try{onPeak?.()}catch(e){console.warn(e)}
      }
      if(p>=1)finish()
      // Vindstød: to overlejrede bølger → ilden svajer frem og tilbage
      gust=Math.sin(now/380)*0.45+Math.sin(now/137)*0.25

      // Flammehøjde: gennemsnitligt varmetab pr. række er ≈ decay/2, så
      // flammerne når ≈ 510/decay rækker op. Start med lave bundflammer og
      // nå et godt stykke forbi toppen af skærmen efter 55% af tiden.
      const k=Math.min(1,p/0.55), e=k*k*(3-2*k)
      const dMin=300/ch, dMax=Math.max(dMin,40)
      const decay=dMax-(dMax-dMin)*e

      acc+=dtMs
      let n=0
      // ~2 skridt pr. 60Hz-frame: flammerne stiger ~2 rækker pr. frame.
      while(acc>=8&&n<6){step(decay,p);acc-=8;n++}
      if(n===6)acc=0

      if(!ending&&p<1)for(let i=0;i<4+p*10;i++)sparks.push({x:Math.random()*W,y:H*(0.3+Math.random()*0.7),vx:(Math.random()-.5)*4+gust*4,vy:-(5+Math.random()*12),life:0,max:40+Math.random()*60,size:3+Math.random()*7})
      const dt=dtMs/16.7
      for(let i=sparks.length-1;i>=0;i--){
        const s=sparks[i]
        s.life+=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.vx+=(Math.random()-.5)*0.8*dt
        if(s.life>=s.max||s.y<-20)sparks.splice(i,1)
      }
      render()
    }
    requestAnimationFrame(frame)
  })
}
