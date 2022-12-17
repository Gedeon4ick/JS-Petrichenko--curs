'use strict';

// Пример с асинхронным кодом
console.log('Запрос данных...');
// использование promis
const req = new Promise(function (resolve, reject) {
    // асинхронный код
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});

// использование промиса
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data =>{
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Ошибка');
});