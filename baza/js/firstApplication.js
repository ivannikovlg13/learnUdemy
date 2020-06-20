// 'use strict';
// //1
// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// //2
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {
//         question1: lastWatchFilm,
//         question2: rateFilm
//     },
//     actors: {},
//     genres: [],
//     privat: false

// };

// //3


// var lastWatchFilm = prompt('Один из последних просмотренных фильмов ? ');
// var rateFilm = prompt('На сколько оцените его? ');




//решение

//1 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat:false

};

const a = prompt('Один из последних просмотренных фильмов ?', ''),
      b = prompt('На сколько оцените его?' , ''),
      c = prompt('Один из последних просмотренных фильмов ?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);