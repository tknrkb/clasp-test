function myFunction() {
    Logger.log("hello world from editor");
    Logger.log("hello world from editor");
    Logger.log("hello world from editor");
    Logger.log("hello world from editor");
}

function clickTEST() {
    Logger.log('click test');
    return 1;
}

function clickTEST2() {
    Logger.log('click test2');
    const a = [];
    throw new Error('Test Error');
    return a[0];
}