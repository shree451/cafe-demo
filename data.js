/* Reads menu and reviews from config.js */
const q=id=>document.getElementById(id);
const D=CFG.menu,RV=CFG.reviews;
q('rv').innerHTML=RV.map(r=>`<div class="card"><span class="st">★★★★★</span><p>${r[1]}</p><small>— ${r[0]}, sample review</small></div>`).join('');
