'use strict';

// получаем обьект со тсраницы

const box = document.querySelector('.box');
const btn = document.querySelector('button');
// Допустим что нам в документе появилась необходимость использовать высоту элемента но без учета margin & border

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height);

// консоль дало значения 405 355
// ширина элемента 400 + padding 10px должна быть 420, но у нас 405 так как линия скрола занимает 15px и тоже входит в ширину элемента
// если добавить в стили box-sizing: border-box;
// консоль 385 335
// св-во меняет поведение блочной структуры и наши padding уже включаются в нашу ширину 400p  x

// раскрытие всего обьекта при нажаии на кнопку
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);
// вешаем обработчик события
btn.addEventListener('click', () => {
    // модифицируем блок обращаясь к его инлайн стилям
    box.style.height = box.scrollHeight + 'px';    
});



