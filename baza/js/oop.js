'use strict';

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));


console.dir([1, 2, 3]);


const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};

const jonh = Object.create(soldier);

// const jonh = {
//   health:100
// };

// Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();