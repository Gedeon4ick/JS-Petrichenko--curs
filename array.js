"use strict";

const arr = [1, 2, 3, 6, 8];

// Методы работы с массивами 
// arr.pop(); // удаление последнего элемента
// arr.push(10); // добавляет в конец массива элемент

// переборка массива 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// Метод fofEach()

arr.forEach(function (item, i, arr) {
     console.log(`${i}: ${item} внутри массива ${arr}`);
});