"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
// Создание методов обьекта. Вызов метода

options.makeTest();

// Деструктуризация обьекта

const {border, bg} = options.colors;
console.log(border);

// Удаление свойств обьекта ключ значение

// delete options.name;

// console.log(options);

// for .. in   Испольщуем для того чтобы перебрать свойства обьекта 
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`); 
//             counter++; 
//         } 
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         counter++;  
//     }
// }

// console.log(counter);

// где counter - счетчик который считает количество параметров обьекта (клчю - значение) это один из способов

console.log(Object.keys(options).length);