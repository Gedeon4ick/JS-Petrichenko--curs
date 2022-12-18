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

// function showGoodFilms(arr) {
//     const res = [];
//     arr.forEach(element => {
//         const newOb = Object.entries(element)
//         .map(item => item[1])
//         // .filter(item => item[1] >= 8)
//         // .map(item => item[0])
//         res.push(newOb)
//     });
//     const result = res.filter(item => item[1] >= 8)
//     .map(item => item[0]);
//     console.log(result);
// }

// showGoodFilms(films)

//.ex20.2
function setFilmsIds(arr) {
    const listFilm = [];
    arr.forEach(element => {
        const film = Object.entries(element)
        .map(item => item[1])
        .filter(item => item[1]);
        listFilm.push(film)
    });
    return listFilm.join(', ');
    // console.log(str);
}
console.log(setFilmsIds(films));