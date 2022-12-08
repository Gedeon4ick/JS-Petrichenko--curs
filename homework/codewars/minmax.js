'use strict';

// let arr = [4,6,2,1,9,63,-134,566];

function CompareNum(a, b) {
    return a-b;
}

function min(list){
    list.sort(CompareNum);
    return list[0];
};

// console.log(min(arr));




// let arrr = [5, 2, 1, -10, 8];

function CompareNumm(a, b) {
    return b-a;
}

function max(list){
    list.sort(CompareNumm);
    return list[0];
};

// console.log(max(arrr));
