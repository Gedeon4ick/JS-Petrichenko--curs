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

// ex.11.2

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));
