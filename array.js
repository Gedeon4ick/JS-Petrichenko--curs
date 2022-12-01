"use strict";

const arr = [1, 22, 3, 6, 8];

arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
     return a-b;
 }
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

// arr.forEach(function (item, i, arr) {
//      console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");
   
// console.log(products.join('; '));