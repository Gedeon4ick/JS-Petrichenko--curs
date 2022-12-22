'use strict';

// метод поиска
// const ans = prompt('Введите ваше имя');
//в этой строке мы хотим найти первую позицию буквы n
// const reg = /n/i;
// console.log(ans.search(reg));
// в скобках то значение которое будем искать внутри строки
// если буквы нет, то консоль выведет -1 
// console.log(ans.match(reg));

// метод replace
// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

 // метод test
// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

// вырезаем имя, шаблом по которому мы будем искать что-то в нашей строке
console.log(str.match(/\w\d\w\d/i));


