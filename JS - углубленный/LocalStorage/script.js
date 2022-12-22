'use strict';

// Работа с LocalStorage

//получение чекбокса и форм со страницы
const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('.form-control');
// кнопка изменения цвета кнопки)
const change = document.querySelector('#color');

// при первом заходе на страницу, идет автоматическая проверка LocalStorage и если есть такой ключ, то галочку переставляем в позицию cheked
// если у нас есть галочка в локал сторедж
if (localStorage.getItem('isChecked')) {
    // токда мы на страницу ставим эту галочку автоматическ
    checkbox.checked = true;
} 

// проверка при заходе на страницу о наличии записи в LocalStorage
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#FF0000';
} 

// добавляем в localStorage цекбос
checkbox.addEventListener('changed', () => {
    localStorage.setItem('isChecked', true);
});





// работа с кнопкой изменения цвета
change.addEventListener('click', () => {
    // проверка локал стородже на наличия bg === в значении change
    if (localStorage.getItem('bg') === 'changed') {
        // если условие выполнилось то
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        // усли в локалсторадж нет записи об изменении увета
        localStorage.setItem('bg', 'changed');
        // окрашевание формы в какой-то цвет
        form.style.backgroundColor = '#FF0000';

    }
});

// перевод обьекта в формат json для отправки в LocalStorage
const persone = {
    name: 'alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));