window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParents = document.querySelector('.tabheader__items');

    // Первая задача скрыть все ненужные нам табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        // убираем класс активности у заголовка
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    // Функция которая будет показывать нам табы

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    // В скобках ноль указывает какому из табов мы добавляем класс активности, ES6 позволяет в аргумемнт функции сразу прописать что будет вызываться по умолчанию у нас это i = 0
    showTabContent();

    // 3 задача Делигирование событий клика, обязательно передовать обььект события

    tabsParents.addEventListener('click', (event) => {
        // Присваиваем переменную для удобства использования Even.target
        const target = event.target;
        // contains tabheader__item
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    // Переменная определяющая дедлайн
    const deadLine = '2023-01-11';

    // разница между дедлайном и нашем текущем временем
    function getTimeRemaining(endtime) {
        // в переменную t получем разницу в колличестве миллисекунд
        const t = Date.parse(endtime) - Date.parse(new Date());
        // Разницу в миллисекундах воращаем обратно в числовой формат для получения кол-ва дней
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        // получение общего кол-ва часов
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        //получение минут
        const minutes = Math.floor((t / 1000 / 60) % 60);
        // получение секунд
        const seconds = Math.floor((t / 1000) % 60);
        // возращаем полученные значения в виде обьекта
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }



    // Фун-ция которая будет устанавливать наш таймер на страничку

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        // интервал запуска функции
        const timeInterval = setInterval(updateClock, 1000);


        // Функция которая будет обновлять наш таймер каждую секунду
        function updateClock() {
            // Расчет того времени который у нас остался прямо на эту секунду
            const t = getTimeRemaining(endtime);
            // Расчетные велечины поместить на страницу
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            // остановка таймера 
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', deadLine);

});