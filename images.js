/* Photos: uses CFG.photos if provided, otherwise generates placeholder cards. */
const CAP=CFG.captions||['Fresh coffee','Wood-fired pizza','Creamy pasta','Crispy fries','Club sandwich','Cosy seating','Iced drinks','Desserts','Brunch','Tacos'];
const IMG=(CFG.photos&&CFG.photos.length)?CFG.photos:['☕','🍕','🍝','🍟','🥪','🪑','🍹','🍰','🍳','🌮'].map((e,i)=>{const c=document.createElement('canvas');c.width=360;c.height=480;const x=c.getContext('2d'),g=x.createLinearGradient(0,0,360,480);
g.addColorStop(0,'#1c1c20');g.addColorStop(1,i%2?'#7a1620':'#4a4d55');x.fillStyle=g;x.fillRect(0,0,360,480);x.textAlign='center';x.font='150px serif';x.fillText(e,180,270);x.fillStyle='#ddd';x.font='22px sans-serif';x.fillText('Your photo here',180,420);return c.toDataURL('image/jpeg',.85)});
