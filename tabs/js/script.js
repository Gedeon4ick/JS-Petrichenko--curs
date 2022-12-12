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
        let days, hours, minutes, seconds;
        // в переменную t получем разницу в колличестве миллисекунд
        const t = Date.parse(endtime) - Date.parse(new Date());
        // Прописываем что будет если пользователь укажет даду которая не входит в акцию то, есть просрочена
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            // Описание расчета если пользователь подпадает в диапозон акции
            // Разницу в миллисекундах воращаем обратно в числовой формат для получения кол-ва дней
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            // получение общего кол-ва часов
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            //получение минут
            minutes = Math.floor((t / 1000 / 60) % 60);
            // получение секунд
            seconds = Math.floor((t / 1000) % 60);
            // возращаем полученные значения в виде обьекта

        }
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // функция для подставления 0 перед 1 значным числом
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
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

        // фикс мигания верстки при обновлении или заупскии страницы
        //необходимо вызвать функциию в начале
        // функция инициализации один раз запуститься исчезнет, далее будет работать setInterval
        updateClock();

        function updateClock() {
            // Расчет того времени который у нас остался прямо на эту секунду
            const t = getTimeRemaining(endtime);
            // Расчетные велечины поместить на страницу
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            // остановка таймера 
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadLine);
});