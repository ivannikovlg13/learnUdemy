 'use strict';
//  //1
//  let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
//  //2
//  let personalMovieDB = {
//      count: numberOfFilms,
//      movies: {
//          question1: lastWatchFilm,
//          question2: rateFilm
//      },
//      actors: {},
//      genres: [],
//      privat: false

//  };

// // //3


//  var lastWatchFilm = prompt('Один из последних просмотренных фильмов ? ');
//  var rateFilm = prompt('На сколько оцените его? ');




//решение

//1 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else if (numberOfFilms == ''){
    console.log('Произошла ошибка');
} else {
    console.log('Вы класический зритель');
}
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat:false

};




 for(let i= 0;i < 2; i++){
     const a = prompt('Один из последних просмотренных фильмов ?', '');
     const b = prompt('На сколько оцените его?', '');

     if (a != null & b != null && a != '' & b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
     } else{
         console.log('error');
         i--;
     }

    
 }

// let i = 0;
// while(i < 2){
//     const a = prompt('Один из последних просмотренных фильмов ?', '');
//     const b = prompt('На сколько оцените его?', '');
//     i++;
// }
//  let i = 0;

//  do{
//      const a = prompt('Один из последних просмотренных фильмов ?', '');
//      const b = prompt('На сколько оцените его?', '');
//      i++;
//  } while(i < 2);


if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


      




console.log(personalMovieDB);