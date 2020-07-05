'use strict ';

const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//   alert('CLick');
// };

// btn.onclick = function(){
//   alert(' Second CLick');
// };
// let i = 0;
const deleteElement = (event) =>{
  console.log(event.target);
  console.log(event.type);
  // i++;
  //   if(i == 1){
  //     btn.removeEventListener('click', deleteElement);
  //   }
};
btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true});
});
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
  event.preventDefault();

  console.log(event.target);
});

