/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Аватар"
    ]
};

//1
// document.querySelector('.promo__adv').style.display = 'none';
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      titles = document.querySelector('.promo__interactive-title');

titles.style.fontSize = '40px';


adv.forEach(item => {
    item.remove();
});

genre.textContent= 'драма';


poster.style.backgroundImage = 'url("img/bg.jpg")';

//2

// document.querySelector('.promo__genre').innerHTML = 'драма';

//3!!!!!

// document.querySelector('.promo__bg').style.background = 'img.bg.jpg';

//4

// const films = document.querySelectorAll('.promo__interactive-item');
// console.log(films);

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i)  =>{
    movieList.innerHTML += `
        <li class = "promo__interactive-item">${i + 1} ${film}
            <div class = "delete"></div> 
        </li> 
    `;
});






