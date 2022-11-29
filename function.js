'use strict';

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello');


function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 5));
console.log(calc(2, 5));
console.log(calc(1, 5));

// Конвертор денег

const  usdCurr = 28;
const  eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


