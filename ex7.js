

function calculateVolumeAndArea(lenght) {
    if (typeof lenght !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
        return 'При вычисление произошла ошибка';
    }

    let volume = 0; 
    let area = 0;

    volume = lenght * lenght * lenght;
    area = 6 * (lenght * lenght);

    return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
}

// calculateVolumeAndArea(5);

console.log(calculateVolumeAndArea(15));
