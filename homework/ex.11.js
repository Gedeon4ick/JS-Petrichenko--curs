"use strict";
// ex.11.1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(params) {
    let str='';
    
    params.lenght === 0 ? str = 'Семья пуста' : str = 'Семья стостоит из: ';
    params.forEach(element => {
        str += `${element} `;
    });
    return str;
}

console.log(showFamily(family));