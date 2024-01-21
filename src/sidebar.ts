function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('GAS実行')
        .addItem('openSidebar', 'openSidebar')
        .addToUi();
}