"use strict";

// Передача информации по ссылке или по значению пишем функцию для копирования обьекта
// 1 cспособ

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;  
}

//ТЕСТ
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
 
const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

// 2способ. Соединение (копирование) обьектов с помощью Object.assign()

const add = {
    d: 17,
    e:20
};

// console.log(Object.assign(numbers, add));

// копирование 

const clone = Object.assign({}, add);
console.log(clone);

// метод создания копий массива

const oldArray = ['a', 'b', 'c'];
const newArray = [...oldArray];

console.log(newArray);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// у нас есть массив который необхоимо передать функции

const num = [2, 5, 7];

// Вызываем функцию методом splet таким образом передаем наш массив в аргумент функции

log(...num);

// копирование обьекта с помощью spret оператора

const obj = {
    first: 1,
    second: 2
};

const newObject = {...obj};
console.log(newObject);