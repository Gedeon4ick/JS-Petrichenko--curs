'use strict';

var min = function(list){
    Math.min(list);
    return list[0];
};


var max = function(list){
    Math.max(list);
    return list[0];
};

let arr = [4,6,2,1,9,63,-134,566];

function CompareNum(a, b) {
    return a-b;
}

function min(list){
    list.sort(CompareNum);
    return list[0];
};

console.log(min(arr));
