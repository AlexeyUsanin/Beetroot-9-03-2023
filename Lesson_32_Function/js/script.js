// Function Declaration

function showHi(firstName = 'John', lastName = 'Doe') {
  // alert('Hi!');
  console.log('lastName :>> ', lastName);

  // if (lastName === undefined) {
  //   lastName = 'Doe'
  // }
  console.log(`Hi, ${firstName.toUpperCase()} ${lastName}!`);
}

// showHi('dfdf', 'dfdfdf');

function add(a, b) {
  // return;
  console.log('arguments.length', arguments.length);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  if (b === undefined) {
    return 'Type second argument';
  }

  const sum = a + b;

  return sum;
}

console.log(add(5, 6, 5, 6, 8, 9, 5, 3, 2,));

const allowedAge = 18;

function showMessage(message) {
  return `Access ${message.toUpperCase()}`;
}

function checkAge(age, message) {
  const allowedAge = 20;
  console.log('allowedAge :>> ', allowedAge);

  if (age < allowedAge) {
    const msg = message('Denied');
    console.log('msg :>> ', msg);
  }

  return message('Granted');
}

console.log('allowedAge :>> ', allowedAge);

console.log(checkAge(20, showMessage));


// const firstName = '';
// console.log('firstName :>> ', firstName);

// Function Expression
// let showHi = function () {
//   alert('Hi!');
//   console.log('Hi!');
// }

// showHi = function () {
//   console.log('Hello!')
// }


/// Arrow Function
// const minus = (a, b) => {
//   if (a === undefined) {

//   }
//   return a - b
// };


const minus = (a, b) => a - b;

console.log(minus(10, 7));
