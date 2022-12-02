
//ex9 Задча на числа Фибаначи

function fib(ar) {
    if (typeof ar !== 'number' || ar <=0 || !Number.isInteger(ar)) {
        return '';
    }

    let result = "";
    let first = 0;
    let second = 1;

    for (let i = 0; i < ar; i++) {
        if (i + 1 === ar) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;


}