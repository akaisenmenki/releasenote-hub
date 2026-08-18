
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
  const values = sheet.getDataRange().getValues();

  const headers = values[0];

  const data = values
    .slice(1)
    .filter(row => row[5] === 'Published')
    .map(row => ({
      releaseDate: Utilities.formatDate(
        new Date(row[0]),
        Session.getScriptTimeZone(),
        'yyyy-MM-dd'
      ),
      title: row[1],
      category: row[2],
      summary: row[3],
      detail: row[4]
    }));

  return ContentService
    .createTextOutput(JSON.stringify(data, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}
