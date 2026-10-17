Café website demo (template)
1. Unzip and double-click index.html (internet needed for the 3D library and map).
2. Customise EVERYTHING in config.js: brand name, colours, address, map, WhatsApp number, menu, prices, reviews, photos.
3. Orders: put the client's WhatsApp number in config.js -> whatsapp:'919876543210'.
4. Photos: put images in an img/ folder and list them in config.js -> photos:['img/1.jpg',...]. Host the site online (Netlify / GitHub Pages) so the 3D photo cards can load them.
5. Order records (optional): follow google-sheet-setup.txt, then paste the URL in config.js -> sheetUrl.
6. Hosting: upload the whole folder. Set demo:false in config.js to remove the DEMO badge.
Files: index.html -> style.css, config.js (edit), data.js, images.js, app.js (UI), scene.js (3D).
