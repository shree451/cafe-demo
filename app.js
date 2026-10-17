/* apply config */
document.title=CFG.brand;q('lg').textContent=CFG.brand;q('tg').textContent=CFG.tag;q('h1').innerHTML=CFG.h1[0]+'<br><em>'+CFG.h1[1]+'</em>';q('ab').textContent=CFG.about;
q('s1').textContent=CFG.rating+'★';q('s1l').textContent=CFG.reviewsN+' reviews';q('s2').textContent=CFG.price;q('s3').textContent=CFG.closes;
q('rb').textContent=CFG.rating;q('rn').textContent='Based on '+CFG.reviewsN+' reviews';q('rp').innerHTML=CFG.mentions.map(m=>`<span class="pill">${m}</span>`).join('');
q('ad').textContent=CFG.address;q('hr').innerHTML=CFG.hours+'<br>Instagram: '+CFG.instagram;
q('mp').src='https://maps.google.com/maps?q='+encodeURIComponent(CFG.mapQuery)+'&output=embed';q('dr').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(CFG.mapQuery);
document.documentElement.style.setProperty('--red',CFG.accent);if(!CFG.demo)q('demo').remove();
/* UI: swipe pages, menu, cart, ordering. Set CAFE_WA below. */

q('gr').innerHTML=IMG.map((s,i)=>`<figure><img src="${s}" alt="${CAP[i]||""}"><figcaption>${CAP[i]||""}</figcaption></figure>`).join('');q('sf').src=IMG[5]||IMG[0];q('hp').src=IMG[0];
// cart + order (sent via WhatsApp; set the café number in CAFE_WA, e.g. '919876543210')
const CART={},CAFE_WA=CFG.whatsapp;let oType='Delivery';
function add(c,i){const it=D[c].i[i],k=it[0];CART[k]=CART[k]||{p:it[1],n:0};CART[k].n++;rc()}
function chg(b){const k=b.dataset.k;CART[k].n+=+b.dataset.d;if(CART[k].n<=0)delete CART[k];rc()}
function rc(){const ks=Object.keys(CART);let n=0,t=0;ks.forEach(k=>{n+=CART[k].n;t+=CART[k].n*CART[k].p});
q('ci').innerHTML=ks.length?ks.map(k=>`<div class="cr"><span style="flex:1">${k}</span><span><button data-k="${k}" data-d="-1" onclick="chg(this)">−</button> ${CART[k].n} <button data-k="${k}" data-d="1" onclick="chg(this)">+</button></span><b style="width:64px;text-align:right">₹${CART[k].n*CART[k].p}</b></div>`).join(''):'<p>Your order is empty. Open the menu and tap + to add dishes.</p>';
q('tt').textContent='₹'+t;q('cn').textContent=n;q('ct').textContent=t;q('cart').style.display=n?'block':'none'}
q('ty').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;oType=b.dataset.t;[...q('ty').children].forEach(x=>x.classList.toggle('on',x==b));q('fa').style.display=oType=='Delivery'?'block':'none';q('fd').style.display=oType=='Dine-in'?'flex':'none'};
q('fdt').min=new Date().toISOString().slice(0,10);
function msg(){const ks=Object.keys(CART);let t=0;const L=ks.map(k=>{t+=CART[k].n*CART[k].p;return '• '+CART[k].n+' x '+k+' — ₹'+CART[k].n*CART[k].p});
let m='*New order — '+CFG.brand+'*\nType: '+(oType=='Dine-in'?'Table reservation':oType)+'\nName: '+q('fn').value+'\nPhone: '+q('fp').value;
if(oType=='Delivery')m+='\nAddress: '+q('fa').value;if(oType=='Dine-in')m+='\nDate: '+q('fdt').value+'\nTime: '+q('ftm').value+'\nGuests: '+q('fg').value;
m+=ks.length?'\n\nItems:\n'+L.join('\n')+'\nTotal: ₹'+t:'\n\nItems: reservation only';if(q('fnote').value)m+='\nNotes: '+q('fnote').value;return m}
function chk(){if(!q('fn').value||!q('fp').value)return 'Please enter your name and phone number.';
if(oType!='Dine-in'&&!Object.keys(CART).length)return 'Please add at least one dish from the menu.';
if(oType=='Delivery'&&!q('fa').value)return 'Please enter your delivery address.';
if(oType=='Dine-in'&&(!q('fdt').value||!q('ftm').value||!q('fg').value))return 'Please choose date, time and number of guests.';return ''}
function copyO(){const e=chk();if(e){q('om').textContent=e;return}try{navigator.clipboard.writeText(msg());q('om').textContent='Order copied. Paste it in WhatsApp or a message.'}catch(x){q('om').textContent=msg()}}
function saveSheet(){if(!CFG.sheetUrl)return;const ks=Object.keys(CART);let t=0;const items=ks.map(k=>{t+=CART[k].n*CART[k].p;return CART[k].n+' x '+k}).join(', ');
try{fetch(CFG.sheetUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify({type:oType,name:q('fn').value,phone:q('fp').value,address:q('fa').value,date:q('fdt').value,time:q('ftm').value,guests:q('fg').value,items:items,total:t,notes:q('fnote').value})})}catch(x){}}
function send(){const e=chk();if(e){q('om').textContent=e;return}saveSheet();if(!CAFE_WA){q('om').textContent=CFG.sheetUrl?'Order saved to the café sheet. (Set whatsapp in config.js to also open WhatsApp.)':'Café WhatsApp number is not set yet (set whatsapp in config.js). Use Copy order for now.';return}q('om').textContent='Opening WhatsApp…';window.open('https://wa.me/'+CAFE_WA+'?text='+encodeURIComponent(msg()),'_blank')}
rc();
let cat=0,idx=0,cur=0,pi=0,fi=-1;let TCOL=0x8aa15a;const DEF=[0x8aa15a,0x7fb069,0xe8742c,0xf2c94c,0,0,0],NM=['Home','Menu','Gallery','Reviews','Order','Visit','Features'];
function sel(c,i){cat=c;idx=i;const k=D[c],it=k.i[i];cur=k.m;TCOL=(it[3]!=null?it[3]:(k.col||0xffffff));
q('nm').textContent=it[0];q('pr').textContent='₹'+it[1];q('ds').textContent=it[2]||k.t;q('an').textContent='3D animation: '+k.a;
[...q('chips').children].forEach((b,n)=>b.classList.toggle('on',n==c));
q('list').innerHTML=k.i.map((x,n)=>`<div class="it${n==i?' on':''}"><button onclick="sel(${c},${n})">${x[0]}</button><b>₹${x[1]}</b><button class="pl" onclick="add(${c},${n})">+</button></div>`).join('')}
q('add').onclick=()=>add(cat,idx);q('chips').innerHTML=D.map((k,n)=>`<button class="chip" onclick="sel(${n},0)">${k.k}</button>`).join('');sel(0,0);
// swipe pager
const pgr=q('pg');q('dots').innerHTML=NM.map((n,i)=>`<i onclick="go(${i})"></i>`).join('');
function go(i,first){pi=Math.max(0,Math.min(6,i));pgr.style.transition='transform .6s cubic-bezier(.2,.8,.2,1)';pgr.style.transform=`translateX(${-pi*100}vw)`;
[...q('dots').children].forEach((d,n)=>d.classList.toggle('on',n==pi));q('pt').textContent=NM[pi];
if(!first)q('hint').style.opacity=0;if(pi!=1){cur=(cur+1)%7;TCOL=(DEF[cur])}}
let sx,sy,dx=0,ok=0,drag=0,moved=0;
const st=e=>{const p=e.touches?e.touches[0]:e;if(e.target.closest('.chips,input,select,textarea,iframe'))return;sx=p.clientX;sy=p.clientY;ok=1;drag=0;dx=0};
const mv=e=>{if(!ok)return;const p=e.touches?e.touches[0]:e,x=p.clientX-sx,y=p.clientY-sy;if(!drag&&Math.abs(x)>10&&Math.abs(x)>Math.abs(y)*1.3)drag=1;
if(drag){dx=x;pgr.style.transition='none';pgr.style.transform=`translateX(calc(${-pi*100}vw + ${x}px))`;if(e.cancelable)e.preventDefault()}};
const end=()=>{if(!ok)return;ok=0;if(drag){moved=1;setTimeout(()=>moved=0,60);drag=0;go(pi+(dx<-50?1:dx>50?-1:0))}};
pgr.addEventListener('touchstart',st,{passive:true});pgr.addEventListener('touchmove',mv,{passive:false});pgr.addEventListener('touchend',end);pgr.addEventListener('touchcancel',end);
pgr.addEventListener('mousedown',st);addEventListener('mousemove',mv);addEventListener('mouseup',end);
pgr.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault()}},true);
addEventListener('keydown',e=>{if(e.key=='ArrowRight')go(pi+1);if(e.key=='ArrowLeft')go(pi-1)});
go(0,1);setInterval(()=>{if(pi!=1){cur=(cur+1)%7;TCOL=(DEF[cur])}},4000);
