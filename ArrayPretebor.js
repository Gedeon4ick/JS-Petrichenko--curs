'use strict';

// методы перебора массивов
// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

// // Получить имена длина которых не более 5 символов

//  const shortNames = names.filter((name) => {
//     return name.length < 5;
//  });

//  console.log(shortNames); 

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result);

// методы возращающие булиновое значение 
// every/some

// const some = [4, 'we', 'weqwe'];

// // задача если внутри массива хотябы 1 число
// // console.log(some.some(item => typeof(item) === 'number'));

// // 
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6 ];

// // собираем весь массив воедино 

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// reduce со строками

// const arr = ['apple', 'pear', 'plum'];

// // собираем весь массив  строк воедино 

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

// example

const obj = {
    ivan: 'persone',
    amm: 'persone',
    dog: 'animal',
    cat: 'animal'
}

// задача вытащить имена тех людей которые находятся в этом обьекте
// используем метод entris и превращаем обьект в матрицу массивов

const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

console.log(newArr);
