'use strict';

// ex12.1 Собеседование
const someString = 'This is some strange string';
function reverse(params) {
    if (typeof(params) !== 'string') {
        return "Ошибка!";
    }
    return params.split("").reverse().join("");
}

console.log(reverse(someString));

