/* ===== EDIT THIS FILE TO CUSTOMISE THE WEBSITE FOR A CLIENT ===== */
const CFG={
  demo:true,                       // set false to remove the "DEMO PREVIEW" badge
  brand:'cafe sunshine ',
  h1:['cafe','sunshine'],
  tag:'Coffee House · Demo Café',
  about:'A cosy neighbourhood café serving fresh coffee, pizza, pasta, sandwiches and desserts. Replace this text with your client\'s own story.',
  rating:'4.8', reviewsN:'120', price:'₹200–500', closes:'11 PM',
  hours:'Open daily · 9 AM – 11 PM',
  address:'12 Demo Street, Mira Road East, Mumbai 401107',
  mapQuery:'Mira Road East, Mumbai',   // type the real business name + area here
  instagram:'jayshu_16',
  whatsapp:'918875178768',                     // e.g. '919876543210' (country code + number). Orders are sent here.
  sheetUrl:'',                     // Google Sheet web-app URL (see google-sheet-setup.txt). Orders are saved as rows.
  accent:'#e11d2e',                // main brand colour
  photos:[],                       // your own photos, e.g. ['img/1.jpg', ...] (host the site online for 3D photo cards)
  mentions:['Coffee · 24','Pizza · 18','Pasta · 15','Desserts · 9'],
  reviews:[ // SAMPLE reviews: replace with real ones
    ['Aarav S.','Great coffee and a cosy vibe. Perfect spot to hang out with friends.'],
    ['Priya M.','The pasta and the iced latte were fantastic. Friendly staff and quick service.'],
    ['Rohan K.','Loved the pizza and the ambience. Reasonable prices and generous portions.'],
    ['Neha D.','Best brunch in the area. The avocado toast is a must-try.'],
    ['Karan P.','Cheese fries and cold coffee were on point. Will visit again.']],
  // menu: [name, price, description, colour]  — "m" picks the 3D model: 0 pizza, 1 drink, 2 pasta, 3 fries, 4 sandwich, 5 taco, 6 dessert
  menu:[
   {k:'Pizza',m:0,a:'spinning pizza, toppings pop',t:'Freshly baked pizzas.',i:[['Margherita',299,'Classic tomato, cheese and basil.',0xd6452b],['Farmhouse',349,'Loaded with garden vegetables.',0xc8552b],['Pesto Veg',339,'Pesto base with vegetables.',0x8aa15a],['Chicken Tandoori',399,'Smoky tandoori chicken.',0xc8552b]]},
   {k:'Pasta',m:2,a:'noodle twirl and rising steam',t:'Penne or spaghetti.',i:[['Rosa Pasta',289,'Creamy tomato sauce.',0xe8742c],['White Sauce Pasta',329,'Rich and creamy white sauce.',0xf3e6c8],['Pesto Pasta',349,'Fresh basil pesto.',0x8aa15a]]},
   {k:'Small Plates',m:3,a:'jumping fries',t:'Snacks to share.',i:[['Classic Fries',99,'Golden and crispy.',0xf2c94c],['Peri Peri Fries',129,'Spicy peri peri seasoning.',0xd9531e],['Cheese Pull Fries',169,'Loaded with melted cheese.',0xf5a623],['Garlic Bread',149,'Warm, buttery and cheesy.',0xf2c94c]]},
   {k:'Sandwiches',m:4,a:'layers lift apart and stack back',t:'Grilled or club style.',i:[['Club Sandwich',219,'Layered with fresh veggies and cheese.'],['Grilled Veg',189,'Grilled with herbs and cheese.'],['Chicken Melt',249,'Warm, cheesy grilled chicken.']]},
   {k:'Tacos',m:5,a:'bouncing fillings',t:'Crunchy tacos.',i:[['Veg Taco',149,'Fresh vegetables and sauce.'],['Chicken Taco',199,'Seasoned chicken with salsa.']]},
   {k:'Brunch',m:4,a:'layers lift apart and stack back',t:'All day brunch.',i:[['Avocado Toast',269],['French Toast',249],['Nutella Toast',199]]},
   {k:'Drinks',m:1,a:'bubbles rise, ice floats, colour matches the drink',t:'Coffee, tea and shakes.',col:0x7fb069,i:[['Cold Coffee',199,'Chilled, smooth and creamy.',0x8b5a3c],['Iced Latte',189,'Espresso with cold milk.',0xc69c6d],['Iced Matcha',299,'Premium matcha latte.',0x7fb069],['Lemon Iced Tea',129,'Zesty and refreshing.',0xf4d35e],['Peach Iced Tea',129,'Sweet peach flavour.',0xffb27a],['Mojito',169,'Mint, lime and soda.',0x9bd77a],['Oreo Shake',219,'Thick cookies-and-cream shake.',0xcfc5bb]]},
   {k:'Desserts',m:6,a:'scoop drop and espresso pour',t:'Sweet endings.',i:[['Affogato',199,'Ice cream with hot espresso.'],['Chocolate Brownie',149,'Rich and fudgy.'],['Brownie with Ice Cream',219,'Warm brownie, cold scoop.']]}]
};
