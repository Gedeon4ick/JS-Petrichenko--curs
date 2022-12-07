// функция возведение в степень

// function pow(x, n) {
//     let result = 1; // результат из функции изначально 1, так как если ноль поставим то получать будем ноль
//     // далее используем цикл
//     for (let i = 0; i<n; i++) {
//         result *= x;
//     }

//     return result;

// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }


// Рекурсия - когда функция сама себя внутри запускает для каки-то действий

// База рекурсии - случай который приведоит к завершению функции, этот случий приводит к тому что сразу возращается это значение. База рекурсии это едицинца, так как на ней наша функция точно завершиться 

// Шаг рекурсии - запуск вложенной функции но уже с другим значением в нашем  случаее n уменьшается на 1
// Глубина рекурсии - Общая кол-во вложенных вызовых вместе с самым первым, тут это будет число n

// Рекурсия делает функции проще хоть и имеет ограничение по глубине, то есть по кол-ву вызовов



// где х - база, n - во сколько возвести эту базу
// pow(2, 1) // 2
// pow(2, 2) // 4
// pow(2, 3) // 8
// pow(2, 4) // 16


// Практическое задание Задача: посчитать значение общего progress
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Anna',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }

    }
};

// Для решения либо цикл либо рекурсия

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                students += subcourse.length;

                for (let i = 0; i < subcourse.length; i++) {
                    total += subcourse[i].progress;
                }

            }
        }
    }

    return total / students;
}



// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];

        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);