/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

    if (newFilm) {

        if(newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`;
        }

        if(favorite){
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
    }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
    };


    const makeChanges = () => {
        genre.textContent = 'драма'; 
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };





    //2

    // document.querySelector('.promo__genre').innerHTML = 'драма';

    //3!!!!!

    // document.querySelector('.promo__bg').style.background = 'img.bg.jpg';

    //4

    // const films = document.querySelectorAll('.promo__interactive-item');
    // console.log(films);

  

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class = "promo__interactive-item">${i + 1} ${film}
                    <div class = "delete"></div> 
                </li> 
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }


    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);


//     //1)
//     const form = document.querySelector('.add');
//     const filmName = form.querySelector('input.value');
//     console.log(filmName);
//     const btn = document.querySelector('#btn');

//     const joinMovies = (event) => {
//         movieDB.movies.push(filmName);
//     };

//     btn.addEventListener('click', joinMovies, {
//         once: true
//     });


//     //3)
//     const baskets = document.querySelectorAll('.delete');
//     const basketDelete = () => {
//         document.querySelector('.promo__interactive-item').remove();
//     };

//     baskets.forEach(basket => {
//         basket.addEventListener('click', basketDelete, {
//             once: true
//         });
//     });


//     //4)
//     function checkState() {
//         let chbox;
//         chbox = document.getElementById('checkbox');
//         if (chbox.checked) {
//             console.log('Добаляем любимый фильм');
//         }
//     }
 });










