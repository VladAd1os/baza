const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов ?', ''),
          b = +prompt('На сколько оцениваете его ?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
}
else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);