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

    // Modal

    // определим переменные

    const modalTrigger = document.querySelectorAll('[data-modal]');
    // само модальное окно
    const modal = document.querySelector('.modal');
    // переменная закрытия
    const modalCloseBtn = document.querySelector('[data-close]');


    function openModal() {
        // modal.classList.add('show');
        // modal.classList.remove('hide');

        //открытие модального окна через toggle
        modal.classList.toggle('show');
        // отключение скрола при открыти модального окна
        document.body.style.overflow = 'hidden';
        // если клиент открыл модальное окно сам то мы очищаем интерва
        clearInterval(modalTimerId);
    }

    // Получили псевдомассив триггеров, и чтбы повесить на каждый из ник обработчик события необходимо перебрать каждый элемент псевдомассива
    modalTrigger.forEach(btn => {
        // Нам понадобиться 2 функции, открытие и закрытие
        //Обработчики события необходимо назначить на несколько тригеров

        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        // Закрытие модального окна через toggle
        modal.classList.toggle('show');

        // восстанавливаем скрол после закрытия модального окна
        document.body.style.overflow = '';
    }
    // closeModal не вызываем а просто передаем!
    modalCloseBtn.addEventListener('click', closeModal);

    // закрытие модального окна при клике на overflow
    modal.addEventListener('click', (e) => {
        // грубо говоря если клик будет по обьекту модал то закроем модалььное окно
        if (e.target === modal) {
            closeModal();
        }
    });

    // закрытие модального окна при нажатии на кнопки при помощи события keydown
    document.addEventListener('keydown', (e) => {
        // второе условие уточняет открыто ли в данный момент модальное окно, и будет запускать функцию закрытия только при условии что оно открыто
        if (e.code === 'Escape' && modalCloseBtn.classList.contains('show')) {
            closeModal();
        }
    });

    // запуск модального окна по истечении времени
    const modalTimerId = setTimeout(openModal, 5000);

    // функция показа модального окна во время скрола
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            // удаление повторного показа модального окна 
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


    // если пользователь долистал страницу до конца то вылазиет модальное окно
    window.addEventListener('scroll', showModalByScroll);


    // используем классы для карточек

    // 1) создаем шаблон , для того чтобы потом от него отпачковывать карты

    class MenuCard {
        //сво-ва которые нам нужны для создания карточек
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.chanheToUAH();
        }

        // методы
        // метод конвертации валют
        chanheToUAH() {
            this.price = this.price * this.transfer;
        }
        // метод создания верстки
        render() {
            // то что будем вставлять
            const element = document.createElement('div');
            // перебираем новые классы
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            // помещение элемента на страницу
            this.parent.append(element);

        }   
    }

    // создаем нвоый обьект
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu__field .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        17,
        '.menu__field .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        19,
        '.menu__field .container'
    ).render();
});