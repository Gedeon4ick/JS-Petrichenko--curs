"use strict"
// alert('Hello world');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18?');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
 
// document.write(answers);

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`htpps//someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(2*4 === '8');

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);


// Проверка сразу нескольких условий с помощью модификатора swith
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 51:
//         console.log('Промах');
//         break;
//     case 50:
//         console.log('Попал');
//         break;    
//     default:
//         console.log('Не в этот раз!');
//         break;
// }

// Логическая операция любой тип ланных превращает в булевый

// const hamburger = true;
// const fries = false;  

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Не сыт!');
// }

// console.log(hamburger && fries);


// Решение задач на логические операции

console.log( NaN || 2 || undefined ); // ответ 2. возвращает значение первого правдивого элемента
console.log( NaN && 2 && undefined ); // NaN возвращает значение первого ложного 
console.log( 1 && 2 && 3 ); // Взвращается значение последнего аргумента т.к все значения true
console.log( !1 && 2 || !3 ); // False
console.log( 25 || null && !3 ); // 25 
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true

// Выполняется ли условие?
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}



