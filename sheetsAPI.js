function doGet(req) {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('Sheet1');
    var values = sheet.getDataRange().getValues(); // Use getValues() instead of getValue()

    var output = [];
    for (var i = 1; i < values.length; i++) { // Start from 1 to skip headers
        var row = {};
        row['name'] = values[i][0]; // Assuming name is in the first column (index 0)
        row['City'] = values[i][1]; // Assuming City is in the second column (index 1)
        row['Rank'] = values[i][2]; // Assuming Rank is in the third column (index 2)
        output.push(row);
    }

    return ContentService
        .createTextOutput(JSON.stringify({ data: output }))
        .setMimeType(ContentService.MimeType.JSON);
}
