'use strict';

// получение инпутов
const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

// реализуем трансформацию денег 

inputRub.addEventListener('input', () => {
    // делаем запрос на сервер
    const request = new XMLHttpRequest();
    // методы обьекта
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'appLication/json; charset=utf-8');
    request.send();

    //сво-ва обьекта:

    //status
    //statusText
    //response
    //readyState

    // События:
    // отслеживает статус готовности запроса в текущий момент
    // request.addEventListener('readystatechange', () => {
    //     // если request.readyState имеет статус готовности 4 (это Done все данные пришли) и статус запроса 200 (завершился)
    //     if (request.readyState === 4 && request.status === 200) {
    //         // то тут можем использовать ответ от сервера
    //         console.log(request.response);
    //         // получили в консоле обьект json который необходимо трансформировать для дальнейшей рабоыт с ним
    //         const data = JSON.parse(request.response);
    //         // в data мы получили обычный js обьект котрый мы можем ипользовать
    //         // расчитать курс валют на основании того что пришло от сервера и от того что ввел пользователь
    //         inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
    //         // toFixed('кол-во знаков после запятой')
    //     } else {
    //         // Всегда оповещять пользователя если что-то пошло не так
    //         inputUsd.value = 'Что-то пошло не так!';
    //     }
    // });

    request.addEventListener('load', () => {
        // если request.readyState имеет статус готовности 4 (это Done все данные пришли) и статус запроса 200 (завершился)
        if (request.status === 200) {
            // то тут можем использовать ответ от сервера
            console.log(request.response);
            // получили в консоле обьект json который необходимо трансформировать для дальнейшей рабоыт с ним
            const data = JSON.parse(request.response);
            // в data мы получили обычный js обьект котрый мы можем ипользовать
            // расчитать курс валют на основании того что пришло от сервера и от того что ввел пользователь
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            // toFixed('кол-во знаков после запятой')
        } else {
            // Всегда оповещять пользователя если что-то пошло не так
            inputUsd.value = 'Что-то пошло не так!';
        }
    });



});