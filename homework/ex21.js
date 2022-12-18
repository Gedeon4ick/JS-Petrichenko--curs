'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

function getPositiveIncomeAmount(arr) {
    const listFilm = [];
    const aR = [];
    arr.forEach(element => {
        const film = Object.entries(element)
        .map(item => item[1])
        return listFilm.push(film);

    });
    for (let value of listFilm ) {
        if(value <= 0) {
            continue;
        } else {
            aR.push(...value);
        }
    }
    const res = aR.reduce((sum, current) => sum + current);
    return res;
};


console.log(getPositiveIncomeAmount(funds));