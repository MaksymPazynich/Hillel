function printWithDelay(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

printWithDelay("Привіт через 2 секунди", 2000);