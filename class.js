'use sttrict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //метод
    calcArea() {
        return this.height * this.width;
    }
}
// extends наследуется от 
class ColorRectangLeWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        // super() - вызывает тоже самое что было у родителя
        // всегда должна быть на первом месте в конструкторе
        super(height, width);
        this.text= text;
        this.bgColor = bgColor; 
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}


const div = new ColorRectangLeWithText(24, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());
// // передача классам обьекта
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

