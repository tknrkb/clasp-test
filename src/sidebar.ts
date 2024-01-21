function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('GAS実行')
        .addItem('openSidebar', 'openSidebar')
        .addToUi();
}

function openSidebar() {
    const ui = SpreadsheetApp.getUi();
    const template = HtmlService.createTemplateFromFile('sidebar_html');
    const htmlOutput = template.evaluate();
    htmlOutput.setTitle('Sidebar');
    ui.showSidebar(htmlOutput);
}