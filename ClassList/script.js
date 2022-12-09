// Получение кнопок со страницы

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// Обращение к классам метод length покажет кол-во классов у элемента

// console.log(btns[0].classList.length);

// Методы которые есть у classList
// метод item позволяет нам получить класс который распологается под определенным индексом. В скобках пишем индекс класса который хотим получить 

// console.log(btns[0].classList.item(0));

// Добавление классов метод add

// console.log(btns[0].classList.add('red'));

// Удаление ненужных классов remove()

console.log(btns[1].classList.remove('blue'));

// Метод toggle(), если класса нет на элементе он будет добавлен если есть то будет удален

// console.log(btns[0].classList.toggle('blue'));

// метод contains() позволяет проверять наличие класса на определенном элементе, определенного класса и возращает булиновое значение

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// добавление класса кнопке при клике b вместе с проверкой на наличие класса

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red')
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

//  тоже самое только через toggle 

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

// Делигирование событий, если элемент подходит под условия то на нем будет срабатывать та функция которую мы передали. Мы деллигируем события с родителя на его потомков

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('hELLOW');
    }
});

// Назначаем тот же обработчик события с помощью перебора forEach. Минус - не будет деллегировать обработчик событий на новый кнопки

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//          console.log('Hello');
//     });
// });

// теперь если мы будем создавать еще кнопка им будет деллигироваться функция


const btn = document.createElement('button');
btn.classList.add('red');
// помещаем  созданную кнопку в обертку wrapper

wrapper.append(btn);