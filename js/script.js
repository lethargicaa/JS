"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b; 
            console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено меньше 10 фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Нуну, дада");
        } else {
            console.log("Ну совсем теперь");
        }    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt('Введите ваши любимые жанры через запятую');

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их совсем');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
            }

            // arr.forEach(function(element, i, arrr) {
            //     console.log(`${i} : ${element} inside array ${arrr}`);
            // });
        }
        personalMovieDB.genres.forEach(function(item, i, genreArray) {
            console.log(`Любимый жанр ${i+1} это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;    
        } else {
            personalMovieDB.privat = true;
        }
    }
};