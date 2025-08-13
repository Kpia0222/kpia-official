const logo = document.getElementById('artistLogo');
const bg = document.getElementById('bg');
const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburger');

// 初回ロード2秒フェードイン
window.addEventListener('load', ()=>{
  requestAnimationFrame(()=> logo.classList.add('show'));
});

// ピクセル化解除：スクロール20%で
let mosaicCleared=false;
function clearMosaic(){
  if(mosaicCleared) return;
  mosaicCleared=true;
  bg.classList.add('clear');
}
window.addEventListener('scroll', ()=> {
  if(window.scrollY > window.innerHeight*0.2) clearMosaic();
},{passive:true});

// ハンバーガー
const toggleDrawer=(open)=>{
  drawer.classList.toggle('open',open);
  hamburger.setAttribute('aria-expanded',open);
  document.body.style.overflow=open?'hidden':'';
};
hamburger.addEventListener('click',()=>toggleDrawer(true));
drawer.addEventListener('click',e=>{
  if(e.target.hasAttribute('data-close')) toggleDrawer(false);
});
drawer.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>toggleDrawer(false)));

// Web Share API
const shareBtn=document.getElementById('shareBtn');
if(shareBtn){
  shareBtn.addEventListener('click',async ()=>{
    const data={title:document.title,text:'Check this artist!',url:location.href};
    try{
      if(navigator.share) await navigator.share(data);
      else {await navigator.clipboard.writeText(location.href); alert('URLコピーしました');}
    }catch(e){console.warn(e);}
  });
}

// 流体背景アニメーション（簡易版）
const canvas=document.createElement('canvas');
canvas.style.position='fixed';canvas.style.top='0';canvas.style.left='0';
canvas.style.width='100%';canvas.style.height='100%';canvas.style.zIndex='-3';
document.body.appendChild(canvas);
const ctx=canvas.getContext('2d');
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
window.addEventListener('resize',resize);resize();

let t=0;
function animate(){
  t+=0.01;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<10;i++){
    const x=canvas.width*Math.random();
    const y=canvas.height*Math.random();
    const r=50+30*Math.sin(t+i);
    const gradient=ctx.createRadialGradient(x,y,0,x,y,r);
    gradient.addColorStop(0,'rgba(229,107,255,0.3)');
    gradient.addColorStop(1,'rgba(126,210,255,0)');
    ctx.fillStyle=gradient;
    ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();
