'use strict';

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

const objectArray = Object.values(shoppingMallData.shops);


function isBudgetEnough(data) {
    let S = 0;
    const {
        shops,
        height,
        moneyPer1m3,
        budget
    } = data;
    shops.forEach(element => {
        // const {width, length} = element;
        // const res = width * length;
        const objectArray = Object.values(element);
        const res = objectArray.reduce((acc, rec) => acc * rec);
        S += res;
    });
    const V = S * height;
    console.log(V);
    if (budget/moneyPer1m3 > V) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));