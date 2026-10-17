// Paste this in Google Sheet -> Extensions -> Apps Script
function clean(v){v=String(v==null?'':v).slice(0,500);return /^[=+\-@]/.test(v)?"'"+v:v} // stops spreadsheet formula injection
function doPost(e){
  var d=JSON.parse(e.postData.contents);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var sh=ss.getSheetByName('Orders')||ss.insertSheet('Orders');
  if(sh.getLastRow()===0)sh.appendRow(['Received','Type','Name','Phone','Address','Date','Time slot','Guests','Items','Total','Notes']);
  sh.appendRow([new Date(),clean(d.type),clean(d.name),clean(d.phone),clean(d.address),clean(d.date),clean(d.time),clean(d.guests),clean(d.items),clean(d.total),clean(d.notes)]);
  return ContentService.createTextOutput('ok');
}
