// デバッグ用に。スプレッドシートにログを追記する
// TODO: タイムスタンプするファイルと同じやつを使う

var logSheetId;

function logging(str) {
  var sheet = SpreadsheetApp.openById(logSheetId).getActiveSheet();
  var ts    = new Date().toLocaleString('japanese', {timeZone: 'Asia/Osaka'});
  sheet.appendRow([ts, str]);
}
