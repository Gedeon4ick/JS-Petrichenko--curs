'use strict';
// Обращаемся по индексу к элементам на странице
// const box = document.getElementById('box');
// console.log(box);

// Обращаемся по тэгам к элементам на странице
// const btns = document.getElementsByTagName('button');
// console.log(btns);

// Обращаемся к отдельной кнопке на странице по индивидуальному индексу

// 1 вариант
// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// 2 вариант
// console.log(btns[0]);

// Метод обращения к классам

// const circle = document.getElementsByClassName('circle');
// console.log(circle);   

// Современный querySelector имеет метод forEach

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(hearts);
// });

// Обращение к первому элементу массива

const oneHearts = document.querySelector('.heart');
console.log(oneHearts);




