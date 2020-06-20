'use strict';

if(1){
  console.log('OK!');
} else{
  console.log('Error');
}




// if(num < 49){
//   console.log('Error');
// } else if(num > 100 ){
//   console.log('Many');
// } else{
//   console.log('Ok!');
// }

// (num === 50) ? console.log('OK!'): console.log('Error');

const num = '50';

switch (num) {
  case '49':
    console.log('Не верно');
    break;
  case '100':
    console.log('Не верно');
    break;
  case '50':
    console.log('В точку');
  break;

  default:
    console.log('Не в этот раз');
    break;
}