"use strict";

// цикл в цикле

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// Решение задачи 

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     // перенос строки
//     result += '\n';
// }

// console.log(result);

// Next ex

for (let i = 0; i < 3; i++) {
    console.log(`First Level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second Level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue
            console.log(`ThirdLevel: ${k}`);
        }
    }
}

// Решение задач по циклам

let num = 5;
while (num < 11) {
    console.log(num);
    num++;
}

// iterator
for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 14) break;
}

// выводим четные цифры 
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// переписываем цикл

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let number = 3; 
while (number < 16) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}

// добавляем в массив элемент
const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);


// Второй уровень сложности задачь 1 задание
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i of arr) {
//     result.push(i);
// }
// console.log(result);

// Второе задание

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i=0; i < data.length; i++) {
//     const element = data[i];
//     if (typeof element === 'number') {
//         data[i] = element * 2;
//     }

//     if (typeof element === 'string') {
//         data[i] = element + ' - done';
//     }    
// }

// console.log(data);

// Третье задание

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// data.reverse();
// for (let i of data) {
//     result.push(i);
// }
// console.log(result);

// Самое сложное задание)

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i +1; j++){
        result += '*';
    }

    result += '\n';
}
console.log(result);