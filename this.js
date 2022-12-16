'use strict';

// контектс вызова функции
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; 
//     }
//     console.log(sum());
// }

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };

// obj.sum();

// showThis(4, 5);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let Ivan = new User('Ivan', 23);


function sayName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John'
};

sayName.call(user);
sayName.apply(user);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если будет use strcict - undefined
// 2) Контекст у методов обьекта, сам обьект
// 3) This в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this (call, applay, bind);

// контекст вызова у обьекта события. Контекст выова равен элементу по которому кликнули
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
});

// Контекст вызова у стрелочный функции , берет контекс у родителя!

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        }

        say();
    }
};

obj.sayNumber();

const dauble = (a) => {
    return a * 2;
};