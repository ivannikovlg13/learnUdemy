/* eslint-disable no-unused-vars */
'use strict';

let answers  = ['IvAn', 'AnNa', 'HeLlo'];
let age = 28;

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

console.log(`User ${name}, ${age} old`);

function fetchData (data, count = 0) {
  console.log(`Данные: ${data} в колличестве ${count}`);
}

fetchData('something');

function max (a, b, ...numbers) {
  console.log(numbers);
}

max(3, 4, 42, 45);

const arr1 = [1, 43, 73],
      arr2 = [33, 54, 55];

// const res = Math.max(...arr1,333,...arr2);
// console.log(res);
const avatar = 'photo';

// const user = {
//   name: 'default',
//   pass: 'qwerty',
//   rights: 'user'
// };

const admin = {
  name: 'admin',
  pass: 'root'
};
const res = {...user, ...admin, avatar};
console.log(res);

const ress = Object.assign(user, admin);


const x = 10,
      y = 25;

const coords = {
  x: x,
  y: y,
  calcSq: function () {
    console.log(this.x*this.y);
  }
};



const user = {
  name: {
    first: 'Sam',
    second: 'Johnson'
  },
  pass: 'qwerty',
  rights: 'user'
};

const {name: {first, second}, rights} = user;
console.log(first, second);


function connect ({
  host = 'localhost',
  port = 3000,
  user = 'default'} = {}) {
        console.log(`host: ${host}, port:${port}, user:${user}`);
}

connect();


const numbers = [[3, 5], [5, 6]];

const [[a, b], [c, d]] = numbers;

console.log(a, b, c, d);


const country = {
  name: 'England',
  population: 200000,
  gender:{
    male:['15%', '40%'],
    female:['16%', '29%']
  }
};
// country.genres.male[0]

const {gender: {male:[maleUnder18, maleAdult], female:[femUnder18, femAdult]}} = country;
console.log(maleUnder18, );