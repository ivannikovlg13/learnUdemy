'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: yellow; width: 250px;';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++){
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('I am here!');


div.classList.add('black');


wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// // wrapper.prepend(div);
// // hearts[1].before(div);
// hearts[1].after(div);

// circles[1].remove();

// hearts[1].replaceWith(circles[0]);
div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin', '<h2> Hellllo <h2>');