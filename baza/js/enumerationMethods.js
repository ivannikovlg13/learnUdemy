'use strict';

//filter(фильтрация массива с выведением отфилтрованного массива)

// const name = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

// const shortNames = name.filter(function (name){
//   return name.length < 5;
// });

// console.log(shortNames);

//map(перебор с имзенением каждого элемента нв выходе)

// let answers = ['AnnA', 'IvAn', 'Hello'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

//every( все элементы сходятся с условием)/ some(хотя-бы 1 элемент сходится с условием)

// const some = [4, 5, 65];

// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [3, 5, 6, 2, 1, 4];
//             // 0    3
//             // 3    5
//             // 8    6
//             //14    2
//             //16    1
//             //17    4
//             // 21



// const res = arr.reduce((summ, current) => summ + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// //             // 0    3
// //             // 3    5
// //             // 8    6
// //             //14    2
// //             //16    1
// //             //17    4
// //             // 21



//  const res = arr.reduce((summ, current) => `${summ}, ${current}`);
//   console.log(res);


const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0])
console.log(newArr);
