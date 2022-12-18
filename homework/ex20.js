// ex20.1
const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const res = [];
    arr.forEach(element => {
        const newOb = Object.entries(element)
        .map(item => item[1])
        res.push(newOb)
    });
    const result = res.filter(item => item[1] >= 8)
    .map(item => item[0]);
    console.log(result);
}

showGoodFilms(films)

//.ex20.2
function showListOfFilms(arr) {
    const listFilm = [];
    arr.forEach(element => {
        const film = Object.entries(element)
        .map(item => item[1])
        .filter(item => item[1]);
        listFilm.push(film);
    });
    return listFilm.join(', ');
    // console.log(str);
}
console.log(showListOfFilms(films));

//.ex20.3

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

setFilmsIds(films);
console.log(films);

//.ex20.4
function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}




