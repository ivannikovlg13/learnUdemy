'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors:{
    border: 'black',
    background: 'red'
  },
  maketest: function(){
    console.log('test');
  }
};

options.maketest();

const {border, background} = options.colors;
console.log(border);


// console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;

// console.log(options);
let counter = 0;

for(let key in options){
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
  } else{
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
  }
}
// console.log(counter);