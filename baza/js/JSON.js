'use strict';

const person = {
  name: 'Alex',
  tel: +733333333,
  parents: {
    mom:'Olga',
    ded:'Mike'
  }
};


const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);