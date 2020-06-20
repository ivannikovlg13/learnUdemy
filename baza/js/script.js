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

<<<<<<< HEAD
if(1){
  console.log('OK!');
} else{
  console.log('Error');
}




// if(num < 49){
//   console.log('Error');
// } else if(num > 100 ){
//   console.log('Many');
// } else{
//   console.log('Ok!');
// }

// (num === 50) ? console.log('OK!'): console.log('Error');

const num = '50';

switch (num) {
  case '49':
    console.log('Не верно');
    break;
  case '100':
    console.log('Не верно');
    break;
  case '50':
    console.log('В точку');
  break;

  default:
    console.log('Не в этот раз');
    break;
}
=======
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
>>>>>>> master
