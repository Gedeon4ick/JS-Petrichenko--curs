"use strict"
// Типы данных
// Числа. Целые:
let number = 4;
// Дробные
let numberDrob = 4.6;

// Строка
const name = "Paul";
// Может быть цифрой
const persone = '3'; 
// булиновая
let isGreater = 4 > 1;
console.log(isGreater);
// Null не существующий обьект, присвоили age значение пустоты
let age = null;
console.log(age);
// Undefined , существующий обьект но без заданного значения
let nol;
console.log(nol);
// Sumbol Вызов typeof x возвращает строку с именем типа: уникальынй индетификатров обьекта
typeof Symbol("id") 

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Обьект
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name)
console.log(obj['name'])

// Array
let arr = ['plum.png', 6, 'apple.bmp', {}, []];
// можем обратиться к каждому элементу по порядку
console.log(arr[0]);


// Массивы и объекты
const arrNew = ['a', 'b', 'c'];
const arrNewObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        def: {
            
        }
    }
};

// Добавляем сво-во обьекту 3 cпособа
const b = 'b';
// arrNewObj.b = '1234';
// arrNewObj['b'] = '1234';
arrNewObj[b] = '1234';
console.log(arrNewObj['b']);



