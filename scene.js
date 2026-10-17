/* 3D scene (three.js). Page still works if this fails to load. */
(function(){
if(!window.THREE){console.warn('three.js not loaded');return}
const tc=new THREE.Color();
const M=(c,o)=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.5},o||{}));
const mk=(g,m,x,y,z)=>{const o=new THREE.Mesh(g,m);o.position.set(x||0,y||0,z||0);return o};
const Cy=(a,b,h,s,oe,tl)=>new THREE.CylinderGeometry(a,b,h,s||40,1,!!oe,0,tl||6.2832),Sp=r=>new THREE.SphereGeometry(r,16,12),Bx=(a,b,c)=>new THREE.BoxGeometry(a,b,c);
const DS=THREE.DoubleSide,rnd=Math.random;
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(45,1,.1,100);C.position.set(0,.3,8);
const R=new THREE.WebGLRenderer({canvas:q('c'),antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
S.add(new THREE.AmbientLight(0xffffff,.5));
const lr=new THREE.PointLight(0xff2233,2.4,40);lr.position.set(-5,2,3);S.add(lr);
const ls=new THREE.PointLight(0xdfe6ff,1.3,50);ls.position.set(4,5,6);S.add(ls);
const lb=new THREE.PointLight(0xffffff,.8,30);lb.position.set(0,3,-5);S.add(lb);
const W=new THREE.Group();S.add(W);
W.add(mk(Cy(2.3,2.5,.18,64),M(0x9aa0aa,{metalness:.9,roughness:.25}),0,-2,0));
const ring=mk(new THREE.TorusGeometry(2.4,.04,8,80),new THREE.MeshBasicMaterial({color:0xff2233}),0,-1.88,0);ring.rotation.x=Math.PI/2;W.add(ring);
const G=[0,1,2,3,4,5,6].map(()=>{const g=new THREE.Group();W.add(g);return g}),U=[{},{},{},{},{},{},{}];
{const p=new THREE.Group();G[0].add(p);p.add(mk(Cy(1.7,1.7,.14,64),M(0xd9a35c)));U[0].c=M(0x8aa15a);p.add(mk(Cy(1.5,1.5,.05,64),U[0].c,0,.08));
U[0].m=[];for(let i=0;i<7;i++){const a=i/7*6.28,m=mk(Sp(.2),M(0x8a6a50),Math.cos(a)*.9,.16,Math.sin(a)*.9);m.scale.set(1,.5,1);p.add(m);U[0].m.push(m)}
U[0].b=[];for(let i=0;i<3;i++){const a=i*2.1+.5,l=mk(Sp(.3),M(0x3f7a30,{side:DS}),Math.cos(a)*.4,.25,Math.sin(a)*.4);l.scale.set(1,.15,.6);l.rotation.y=a;p.add(l);U[0].b.push(l)}
U[0].p=p;p.rotation.x=1.15}
{const g=G[1];g.add(mk(Cy(1.1,.85,2.6,48,1),new THREE.MeshPhysicalMaterial({color:0xffffff,transparent:true,opacity:.18,roughness:.05,side:DS})));
U[1].c=M(0x7fb069,{transparent:true,opacity:.92,roughness:.3});g.add(mk(Cy(1.02,.82,2.2),U[1].c,0,-.15));
U[1].i=[];for(let i=0;i<4;i++){const c=mk(Bx(.5,.5,.5),M(0xe8f6ff,{transparent:true,opacity:.7}),(rnd()-.5)*.9,.8,(rnd()-.5)*.9);g.add(c);U[1].i.push(c)}
const s=mk(Cy(.06,.06,3.4,12),M(0xe11d2e),.35,.5,0);s.rotation.z=-.15;g.add(s);
U[1].b=[];for(let i=0;i<9;i++){const b=mk(Sp(.07),M(0xffffff,{transparent:true,opacity:.6}),(rnd()-.5)*1.2,0,(rnd()-.5)*1.2);g.add(b);U[1].b.push(b)}}
{const g=G[2];g.add(mk(new THREE.SphereGeometry(1.7,40,20,0,6.283,Math.PI/2,Math.PI/2),M(0xf5f0e8,{side:DS}),0,.3,0));
U[2].c=M(0xe8742c);g.add(mk(Cy(1.55,1.55,.05,48),U[2].c,0,.22));U[2].n=[];
for(let i=0;i<5;i++){const t=mk(new THREE.TorusGeometry(.35+i*.18,.08,8,40),M(i%2?0xf2c46d:0xf7dc92),0,.35+i*.04,0);t.rotation.x=Math.PI/2;g.add(t);U[2].n.push(t)}
g.add(mk(Sp(.2),M(0x3f7a30),.3,.8,0));U[2].s=[];for(let i=0;i<6;i++){const s=mk(Sp(.12),M(0xffffff,{transparent:true,opacity:.25}),(rnd()-.5)*.8,1,(rnd()-.5)*.8);g.add(s);U[2].s.push(s)}}
{const g=G[3],c=mk(Cy(1.15,.8,1.5,4,1),M(0xc0392b,{side:DS}),0,-.5,0);c.rotation.y=Math.PI/4;g.add(c);U[3].c=M(0xf2c94c);U[3].f=[];
for(let i=0;i<14;i++){const f=mk(Bx(.2,1.5,.2),U[3].c,(rnd()-.5)*1.1,.3,(rnd()-.5)*1.1);f.rotation.set((rnd()-.5)*.3,0,(rnd()-.5)*.3);f.userData.o=rnd()*6;g.add(f);U[3].f.push(f)}}
{const g=G[4];U[4].L=[[Bx(2.2,.35,2.2),0xd8a860,-.7],[Cy(1,1,.2),0x6b3a1e,-.4],[Bx(2.1,.05,2.1),0xf2c94c,-.2,.78],[Cy(.85,.85,.08),0xd6452b,0],[Bx(2.3,.07,2.3),0x4f8a3c,.25],[Bx(2.2,.35,2.2),0xd8a860,.7]].map(a=>{const m=mk(a[0],M(a[1]),0,a[2],0);if(a[3])m.rotation.y=a[3];g.add(m);return[m,a[2]]})}
{const g=G[5],s=mk(Cy(1.15,1.15,2.6,32,true,Math.PI),M(0xe0a040,{side:DS}),0,0,0);s.rotation.z=-Math.PI/2;g.add(s);U[5].f=[];
for(let i=0;i<9;i++){const m=mk(Sp(.28),M([0x4f8a3c,0xd6452b,0x6b3a1e][i%3]),-1+i*.25,-.1,(rnd()-.5)*.6);m.userData.o=i;g.add(m);U[5].f.push(m)}}
{const g=G[6];g.add(mk(Cy(1.1,.7,1.1,40,1),M(0xffffff,{side:DS}),0,-.3));g.add(mk(Cy(1.5,1.5,.06),M(0xffffff),0,-.9));g.add(mk(Cy(1,1,.04),M(0x3b2314),0,.2));
U[6].s=mk(Sp(.65),M(0xf6ecd8),0,1,0);g.add(U[6].s);U[6].p=mk(Cy(.07,.07,1.6,12),M(0x3b2314),.9,1.2,0);g.add(U[6].p)}
const pg=new THREE.BufferGeometry(),pa=[];for(let i=0;i<300;i++)pa.push((rnd()-.5)*24,(rnd()-.5)*16,(rnd()-.5)*14-3);
pg.setAttribute('position',new THREE.Float32BufferAttribute(pa,3));
const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0xcfd3da,size:.035,transparent:true,opacity:.6}));S.add(pts);


// photo carousel ring (real photos as 3D cards)
const TL=new THREE.TextureLoader(),RG=new THREE.Group();S.add(RG);
IMG.forEach((s,i)=>{const a=i/IMG.length*6.2832,pv=new THREE.Group();pv.position.set(Math.cos(a)*4,0,Math.sin(a)*4);pv.rotation.y=Math.PI/2-a;
pv.add(mk(Bx(1.34,1.74,.05),M(0xb8bcc5,{metalness:.9,roughness:.25})));
pv.add(mk(new THREE.PlaneGeometry(1.2,1.6),new THREE.MeshBasicMaterial({map:TL.load(s)}),0,0,.03));
pv.add(mk(Bx(1.34,.04,.06),M(0xe11d2e,{emissive:0xe11d2e,emissiveIntensity:.8}),0,-.89,0));RG.add(pv)});
// background: wireframe silver knot + coffee beans
const BGG=new THREE.Group();S.add(BGG);const KN=mk(new THREE.TorusKnotGeometry(3,.7,120,12),new THREE.MeshBasicMaterial({color:0x9aa0aa,wireframe:true,transparent:true,opacity:.16}),0,0,-11);KN.scale.setScalar(1.7);BGG.add(KN);
const BE=[];for(let i=0;i<28;i++){const b=mk(Sp(.2),M(i%5?0x2a1a12:0xe11d2e,{metalness:.5,roughness:.35}),(rnd()-.5)*22,(rnd()-.5)*12,-3-rnd()*7);b.scale.set(1,.65,.65);b.userData={o:rnd()*6,s:.3+rnd()*.6};BGG.add(b);BE.push(b)}

// background: coffee cups with steam + pizza slices
const CUPS=[];for(let i=0;i<7;i++){const g=new THREE.Group();g.add(mk(Cy(.45,.3,.5,24,1),M(0xf2f2f4,{roughness:.3})));g.add(mk(Cy(.4,.4,.02,24),M(0x3b2314),0,.25));g.add(mk(new THREE.TorusGeometry(.2,.05,8,16),M(0xf2f2f4),.5,0,0));g.add(mk(Cy(.7,.7,.04,32),M(0xb8bcc5,{metalness:.8,roughness:.3}),0,-.27));
g.position.set((rnd()-.5)*20,(rnd()-.5)*10,-4-rnd()*6);g.userData={o:rnd()*6,s:.3+rnd()*.5,st:[]};
for(let j=0;j<3;j++){const s=mk(Sp(.09),M(0xffffff,{transparent:true,opacity:.3}),0,.4,0);s.userData.j=j;g.add(s);g.userData.st.push(s)}BGG.add(g);CUPS.push(g)}
const SL=[];for(let i=0;i<6;i++){const g=new THREE.Group();g.add(mk(Cy(.9,.9,.1,16,false,.8),M(0xd9a35c)));g.add(mk(Cy(.82,.82,.04,16,false,.8),M(0xe0532b),0,.07));g.add(mk(Sp(.1),M(0x8a1c1c),.35,.1,.3));g.add(mk(Sp(.1),M(0x8a1c1c),.6,.1,.55));
g.position.set((rnd()-.5)*20,(rnd()-.5)*10,-4-rnd()*6);g.userData.o=rnd()*6;BGG.add(g);SL.push(g)}
function size(){R.setSize(innerWidth,innerHeight);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}
addEventListener('resize',size);size();

const clk=new THREE.Clock();
(function loop(){requestAnimationFrame(loop);const t=clk.getElapsedTime(),wide=innerWidth>800,k=wide?1:.8;
const tx=wide?[2.4,-2.4,0,0,0,-2.4,0][pi]:0,ty=wide?.1:1.6,sc=wide?1:.5;
W.visible=pi<2||pi==5;W.position.x+=(tx-W.position.x)*.08;W.position.y+=(ty-W.position.y)*.08;W.scale.setScalar(sc);W.rotation.y=Math.sin(t*.3)*.15;ring.rotation.z=t;
G.forEach((g,i)=>{const on=i==cur,s=g.scale.x+((on?1:0)-g.scale.x)*.12;g.scale.setScalar(Math.max(s,.0001));g.visible=s>.02;g.rotation.y=t*.6;g.position.y=Math.sin(t+i)*.1});
tc.set(TCOL);const c=U[cur].c;if(c)c.color.lerp(tc,.12);
let a=U[0];a.p.rotation.z=t*.4;a.m.forEach((m,k)=>m.position.y=.16+Math.max(0,Math.sin(t*3+k))*.2);a.b.forEach((b,k)=>b.position.y=.25+Math.abs(Math.sin(t*2+k))*.25);
a=U[1];a.i.forEach((m,k)=>{m.rotation.x+=.01*(k+1);m.position.y=.8+Math.sin(t*1.5+k)*.1});a.b.forEach((b,k)=>b.position.y=((t*.4+k/9)%1)*2.2-1.2);
a=U[2];a.n.forEach((r,k)=>{r.rotation.z=t*(k%2?1:-1)*1.2;r.scale.setScalar(1+Math.sin(t*2+k)*.06)});a.s.forEach((s,k)=>{const z=(t*.4+k/6)%1;s.position.y=.9+z*1.6;s.material.opacity=.3*(1-z)});
U[3].f.forEach(f=>f.position.y=.3+Math.max(0,Math.sin(t*3+f.userData.o))*.6);
const sp=Math.sin(t*1.5)*.5+.5;U[4].L.forEach(l=>l[0].position.y=l[1]*(1+sp*1.1));
U[5].f.forEach(f=>f.position.y=-.1+Math.max(0,Math.sin(t*3+f.userData.o))*.5);
a=U[6];const z=(t*.6)%1;a.s.position.y=.85+Math.abs(Math.sin(z*Math.PI))*1.3;a.s.scale.set(1,1-.12*Math.abs(Math.cos(z*Math.PI)),1);a.p.scale.y=.4+Math.abs(Math.sin(t*2))*.6;
pts.rotation.y=t*.02;lr.intensity=2.2+Math.sin(t*2)*.4;

const P=[[0,.2,-5.5,.8],[0,.3,-6,.85],[0,0,-1,1],[0,0,-9,.6],[0,0,-9,.6],[0,.2,-5.5,.8],[0,0,-9,.6]][pi];
RG.position.x+=(P[0]-RG.position.x)*.06;RG.position.y+=(P[1]-RG.position.y)*.06;RG.position.z+=(P[2]-RG.position.z)*.06;RG.scale.setScalar(RG.scale.x+(P[3]*k-RG.scale.x)*.06);RG.rotation.y=t*.25;RG.rotation.x=.12;
KN.rotation.set(t*.1,t*.15,0);BE.forEach(b=>{b.rotation.x+=.01*b.userData.s;b.rotation.y+=.012;b.position.y+=Math.sin(t*b.userData.s+b.userData.o)*.003});
if(pi==2){const n=IMG.length,i=((Math.round((1.5708+RG.rotation.y)/6.2832*n)%n)+n)%n;if(i!=fi){fi=i;q('gc').textContent=CAP[i]}}
BGG.position.x+=(-pi*1.2-BGG.position.x)*.04;
CUPS.forEach(g=>{g.rotation.y+=.01*g.userData.s;g.rotation.z=Math.sin(t*g.userData.s+g.userData.o)*.25;g.position.y+=Math.sin(t*g.userData.s+g.userData.o)*.004;g.userData.st.forEach(s=>{const u=(t*.3+s.userData.j/3)%1;s.position.y=.35+u;s.material.opacity=.3*(1-u)})});
SL.forEach(g=>{g.rotation.x+=.006;g.rotation.y+=.008;g.position.y+=Math.sin(t*.5+g.userData.o)*.004});
R.render(S,C)})();

})();