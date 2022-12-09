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

    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    // В скобках ноль указывает какому из табов мы добавляем класс активности
    showTabContent(0);
});