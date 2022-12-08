
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
});
 
//тоже самое
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);


console.log(map);

// map.keys возращает итерируемый обьект по ключам пример:

// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])    
// } 

// console.log(goods);

// возращает итерируемый обьект по значениям

// for (let price of map.values()) {
//     console.log(price);
// }

// Получение одного большого массива который содержит подмассивы

// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }

map.forEach((value, key, map) => {
    console.log(key, value);
});