'use strict';

function createCounter() {
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

if (0) {
    console.log('Done!')
}
