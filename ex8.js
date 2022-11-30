//ex8.1

function getTimeFromMinutes(num) {
    if (typeof num !== "number" ||  num < 0 ) {
        return 'Ошибка, проверьте данные';
    } 
    const hourse = Math.floor(num/60);
    const minuts = num % 60;
    if (hourse == 0 || hourse >= 5) {
        return `Это ${hourse} часов и ${minuts} минут`;
    } else if (hourse == 1) {
        return `Это ${hourse} час и ${minuts} минут`;
    } else {
        return `Это ${hourse} часа и ${minuts} минут`;
    }
}

console.log(getTimeFromMinutes(23));

