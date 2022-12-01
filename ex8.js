//ex8.1

function getTimeFromMinutes(num) {
    if (typeof num !== "number" ||  num < 0 ) {
        return 'Ошибка, проверьте данные';
    } 
    const hourse = Math.floor(num/60);
    const minuts = num % 60;
    if (hourse == 0 || hourse >= 5) {
        return `Это ${hourse} часов и ${minuts} минут`;
    } else if (hourse == 1) {
        return `Это ${hourse} час и ${minuts} минут`;
    } else {
        return `Это ${hourse} часа и ${minuts} минут`;
    }
}

console.log(getTimeFromMinutes(100));


function findMaxNumber(a, b, c, d) {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number' ) {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
console.log(findMaxNumber(1,2,3,4));


//ex8.2 Задча на числа Фибаначи

function fib(ar) {
    if (typeof ar !== 'number' || ar <=0 || !Number.isInteger(ar)) {
        return '';
    }

    let result = "";
    let first = 0;
    let second = 1;

    for (let i = 0; i < ar; i++) {
        if (i + 1 === ar) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;


}