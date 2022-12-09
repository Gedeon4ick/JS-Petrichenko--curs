'use strict';

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

const set = new Set(arr);
// Добавление в массив значения
set.add('Ivan');


// перебор
// for (let value of set) console.log(value);

set.forEach((value, valueAgaing, set) => {
    console.log(value, valueAgaing);
})

// console.log(set); 
