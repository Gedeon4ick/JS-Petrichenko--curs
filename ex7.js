//ex7.1

// function calculateVolumeAndArea(lenght) {
//     if (typeof lenght !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
//         return 'При вычисление произошла ошибка';
//     }

//     let volume = 0; 
//     let area = 0;

//     volume = lenght * lenght * lenght;
//     area = 6 * (lenght * lenght);

//     return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
// }


// console.log(calculateVolumeAndArea(15));

//ex7.2

// function getCoupeNumber(num) {
   
//     if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (num === 0 || num > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     return Math.ceil(num/4);
// }

function capitalize_sol_one(str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase()+ word.slice(1));
    }
  
    return words.join(" ");

}





// Задаем функцию с переменной str > в ней создаем массив words > запускаем цикл for of 