// js/burn.js — "Afbrænd"-effekten: en fuldskærms-brand tegnet med canvas-
// partikler (flammer, gløder, røg), mens det brændende element forkuller og
// smuldrer. Ren visuel effekt — ingen data/Firebase her; kalderen sletter selv
// (typisk i onPeak, når ilden dækker hele skærmen).

// Forhåndstegnede bløde "klatter" i flammens farver — drawImage af små
// sprites er langt billigere end at lave gradienter pr. partikel pr. frame.
function makeSprite(r,g,b){
  const c=document.createElement('canvas');c.width=c.height=64
  const x=c.getContext('2d')
  const gr=x.createRadialGradient(32,32,0,32,32,32)
  gr.addColorStop(0,`rgba(${r},${g},${b},1)`)
  gr.addColorStop(0.4,`rgba(${r},${g},${b},0.55)`)
  gr.addColorStop(1,`rgba(${r},${g},${b},0)`)
  x.fillStyle=gr;x.fillRect(0,0,64,64)
  return c
}

// Afspiller branden. targetEl forkuller/smuldrer, shakeEl ryster.
// onPeak kaldes når ilden fylder skærmen; promise resolver når alt er væk.
export function playBurnEffect(targetEl,{shakeEl=null,onPeak=null}={}){
  return new Promise(resolve=>{
    const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const DUR=reduce?1200:3600, FADE=reduce?400:1100
    const ov=document.createElement('div');ov.className='burn-ov'
    const glow=document.createElement('div');glow.className='burn-glow'
    const cv=document.createElement('canvas');cv.className='burn-canvas'
    ov.append(glow,cv);document.body.appendChild(ov)
    targetEl?.classList.add('burning')
    if(!reduce)shakeEl?.classList.add('burn-shake')
    try{navigator.vibrate?.([80,40,160,60,300,80,500])}catch(e){}

    const W=cv.width=window.innerWidth, H=cv.height=window.innerHeight
    const scale=Math.max(0.7,H/800)
    const ctx=cv.getContext('2d')
    const fire=[makeSprite(255,250,220),makeSprite(255,205,70),makeSprite(255,120,20),makeSprite(200,40,10)]
    const smoke=makeSprite(35,28,24)
    const rect=targetEl?.getBoundingClientRect()
    const parts=[]
    const t0=performance.now()
    let peaked=false, ending=false, last=t0

    function spawn(p){
      // Ildfronten kravler fra bunden op over hele skærmen.
      const front=H*(1-Math.min(1,p*1.35))
      const n=Math.round(6+p*30)
      for(let i=0;i<n&&parts.length<900;i++){
        let x,y
        if(rect&&Math.random()<0.3){x=rect.left+Math.random()*rect.width;y=rect.top+Math.random()*rect.height}
        else{x=Math.random()*W;y=front+Math.random()*(H-front+60)}
        parts.push({k:'f',x,y,vx:(Math.random()-.5)*1.4,vy:-(2+Math.random()*4)*scale,life:0,max:35+Math.random()*40,size:(40+Math.random()*70)*(0.6+p)*scale})
      }
      for(let i=0;i<3;i++)parts.push({k:'e',x:Math.random()*W,y:H+10,vx:(Math.random()-.5)*4,vy:-(6+Math.random()*9)*scale,life:0,max:50+Math.random()*50,size:4+Math.random()*4})
      if(Math.random()<0.5)parts.push({k:'s',x:Math.random()*W,y:front,vx:(Math.random()-.5),vy:-(1+Math.random()*1.5)*scale,life:0,max:90,size:(90+Math.random()*90)*scale})
    }

    function frame(now){
      const p=(now-t0)/DUR
      const dt=Math.min(3,(now-last)/16.7);last=now
      if(p<1)spawn(p)
      if(!peaked&&p>=0.8){peaked=true;try{onPeak?.()}catch(e){console.warn(e)}}
      if(!ending&&p>=1){
        ending=true
        ov.classList.add('out')
        setTimeout(()=>{
          ov.remove();targetEl?.classList.remove('burning');shakeEl?.classList.remove('burn-shake')
          resolve()
        },FADE)
      }
      ctx.clearRect(0,0,W,H)
      // Røg under ilden (normal blanding), flammer/gløder additivt ovenpå.
      ctx.globalCompositeOperation='source-over'
      for(const q of parts){
        if(q.k!=='s')continue
        const r=q.life/q.max
        ctx.globalAlpha=0.35*Math.sin(Math.PI*r)
        const s=q.size*(1+r)
        ctx.drawImage(smoke,q.x-s/2,q.y-s/2,s,s)
      }
      ctx.globalCompositeOperation='lighter'
      for(const q of parts){
        if(q.k==='s')continue
        const r=q.life/q.max
        if(q.k==='e'){
          ctx.globalAlpha=1-r
          ctx.drawImage(fire[1],q.x-q.size/2,q.y-q.size/2,q.size,q.size)
          continue
        }
        ctx.globalAlpha=(1-r)*0.8
        const s=q.size*(1-r*0.5)
        ctx.drawImage(fire[Math.min(3,Math.floor(r*4))],q.x-s/2,q.y-s/2,s,s)
      }
      ctx.globalAlpha=1
      for(let i=parts.length-1;i>=0;i--){
        const q=parts[i]
        q.life+=dt;q.x+=(q.vx+Math.sin((q.y+q.life)*0.05)*0.6)*dt;q.y+=q.vy*dt
        if(q.k==='e')q.vx+=(Math.random()-.5)*0.6*dt
        if(q.life>=q.max)parts.splice(i,1)
      }
      if(!ending||ov.isConnected)requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  })
}
