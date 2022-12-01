// Пример callback функции
function LernJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот');
}

LernJS('Java Script', done);
// Псоле done не ставим круглые скобки так как мы не вызываем а передаем функцию чтобы она в дальнейшем была использована