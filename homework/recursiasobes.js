'use strict';

function factorial(number) {
    if (typeof number == "string" || !Number.isInteger(number)) {
        return 'Введено неправильное значение';
    } else if (number <= 1 ){
        return 1;
    } else {
        return number != 1 ? number * factorial(number - 1) : 1;
    }
    
}

console.log(factorial(5.1));