// Запуск функции через определенный промежуток времени, сущ конструкции setTimeout

// const timerId = setTimeout();

// Принимает в себя функцию котрая должна будет запуститься через определенный промежуток времени, причем принимает либо обьявление функции, либо ее название, то есть она не вызывается здесь и сейчас

// const timerId = setTimeout(function () {
//     console.log('hello');
// }, 2000);

const btn = document.querySelector('.btn');
// задаем на глобальном уровне переменную для использования ее в функцияъ и внефункциях
let timerId;
// счетчик чиклов
let i = 0;

// создаем анимацию

function myAnimation() {
    const elem = document.querySelector('.box');
    // начальная позиция потом будет меняться
    let pos = 0;

    // Запустить интервал для анимации

    const id = setInterval(frame, 10);

    // функция которая будет запускаться через определенный промежуток времени
    function frame() {
        // когда мы дойдем до значения 300 анимация должна остановиться
        if (pos == 300) {
            clearInterval(id);
        }else {
            // шаг изменния 
            pos++;
            //на каждом шаге анимации будем изменять top
            elem.style.top = pos + "px";
            // left
            elem.style.left = pos + "px";
        }
    }
}

// доавляем тригер нашей анимации

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     const timerId = setTimeout(logger, 2000);
//     setInterval - выполнение функции через определенный интервал времени
//     timerId = setInterval(logger, 500);
// })



// function logger() {
    // если пройдет 3 этэрации то
    // if (i === 3) {
        // то мы останавливаем итерации анимаций 
    //     clearInterval(timerId);
    // }
    // console.log('text');
    // увеличиваем каждую этэрацию переменную i
//     i++;
// }

// Чем рекурсивный set интервал лучше setTimeout 
// set инетрвал выполнив один цикл и начав выполнять другой не будет ждатьа задонного времени (в нашем случае 500 мл.сек), тем самым алгоритм собьется.

// Для решения этой проблемы обычно используют рекурсивный вызов setTimeOut

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);