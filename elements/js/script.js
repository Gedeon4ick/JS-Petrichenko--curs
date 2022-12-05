'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHearts = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
// circle.style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я')ж

div.classList.add('black');   

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// Вставка элемента перед другим элементом
// hearts[0].before(div);
// hearts[0].after(div);

// Удаление элемента со страницы
// circle[0].remove();

// Замена одного элемента другим

// hearts[0].replaceWith(circle[0]);

// добавление HTML структуры настраницу
// div.innerHTML = 'Hello World';

// добавление текста в наш блок
div.textContent = "Hello";
