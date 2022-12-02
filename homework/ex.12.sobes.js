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

// ex12.2

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
console.log(allCurrencies);

function availableCurr(arr, missingCurr) {
    if (arr.length === 0 ) {
        return 'Нет доступных валют!';
    } else {
        if (arr.indexOf(missingCurr) >= 0) {
            let del = arr.splice(arr.indexOf(missingCurr), 1);
        }

        let str = 'Доступные валюты:\n';
        arr.forEach(element => {
            str += element + '\n';
        });
        return str;
    }

}

console.log(availableCurr(allCurrencies, 'UAH'));