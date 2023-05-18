// Data Types
// 1. String
const str = 'Hello';
console.log('str ->', typeof str);
// 2. Number
const num = 5;
console.log('num ->', typeof num);
console.log('NaN :>> ', typeof NaN);
console.log('Infinity :>> ', typeof Infinity);

// 3. Boolean
const isTrue = true;
const isFalse = false;
console.log('isTrue :>> ', typeof isTrue);

// 4. BigInt
const bigInt = 34324234234234442344324324234324n;
console.log('bigInt :>> ', typeof bigInt);

// 5. null
const isNull = null;
console.log('isNull :>> ', typeof isNull);

// 6. undefined
const isUndefined = undefined;
console.log('isUndefined :>> ', typeof isUndefined);

// 7. Symbol
const isSymbol = Symbol();
console.log('isSymbol :>> ', typeof isSymbol);

// 8. Object
const obj = {
  name: 'Mike',
  age: 343434,
  isStudent: true,
  address: {
    city: 'NA'
  }
};

console.log('obj :>> ', typeof obj);
// console.log('obj > obj :>> ', obj > obj);

/// Math operators
// +
// -
// /
// *
// **
// %
console.log(8 % 3);
console.log(123 % 10);

/// Operators comparison
// ==
// ===
// >
// <
// !=
// !==

console.log(3 > 2);
console.log(3 == 2);
console.log('a' > 'A');
// console.log('3 == 3', '3' == 3);
console.log('3 === 3', '3' === 3);
console.log('4 !== 4', 4 !== 4);

// Convert Types
Boolean()
console.log('Boolean(0)', Boolean(0)); // false
console.log('Boolean(1)', Boolean(1)); // true
console.log('Boolean(2)', Boolean(2)); // true
console.log('Boolean("")', Boolean("")); // false
console.log('Boolean(" ")', Boolean(" ")); // true
console.log('Boolean(null)', Boolean(null)); // false
console.log('Boolean({})', Boolean({})); // true
console.log('Boolean(undefined)', !!undefined); // false

// const strNum = Number(prompt('enter num'));

// console.log('typeof strNum :>> ', typeof strNum);

// Number(strNum);

// console.log('Number(strNum)', Number(strNum));

const isNumber = 133;
const numAsString = String(isNumber);

console.log('isNumber :>> ', typeof isNumber);
// console.log('String  :>> ', typeof String(isNumber));
console.log('typeof numAsString :>> ', typeof numAsString);
Number(numAsString);


// Operators Increment & Decrement
let a = 5;
let b = 5;

console.log('++Increment', ++a);
console.log('a', a);

console.log('Increment++', a++);
console.log('a', a);

console.log('--Decrement', --b);
console.log('b', b);

console.log('Decrement--', b--);
console.log('b', b);


/// String
const word = 'Hello World!';
const sentence = 'Lorem ipsum dolor sit amet.';

console.log('length', word.length);
console.log(word[word.length - 1]);
console.log(word[2]);

console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.concat(sentence, sentence));
console.log(word.includes('World'));
console.log(word.substring(1, word.length - 2));
console.log(word.substring(1, 3));
console.log(word.slice(1, -2));
console.log(word.replace('World', 'All'));
console.log(word.replace('!', '?'));

/// Number
// const number = Number.parseFloat(prompt('Enter num'));

// console.log(Number.isNaN('a' * 10)); // NaN

// console.log('parseFloat', Number.parseFloat(number));
// console.log('parseInt', Number.parseInt(number));

// console.log(number.toFixed(5));

/// Logical operators
// || OR
// && AND
// ! NOT

console.log(null || word || 0 || 'Hi');
console.log(1 && 2 && 'a' && false); // true && false
console.log(!0);
console.log(!1);

/// Conditional operators

// const isInteger = Number.parseFloat(prompt('Enter num!'));

// console.log('isInteger :>> ', isInteger);

// if (isInteger % 2 === 0) {
//   alert("It's even number");
// } else if (isInteger % 2 !== 0 && !Number.isNaN(isInteger)) {
//   alert("It's odd number")
// } else {
//   alert("It's not a number");
// }

// const isEven = isInteger % 2 === 0 ? alert("It's even number") : alert("It's odd number"); // condition ? true : false

// console.log('isEven :>> ', isEven);

const operand1 = Number.parseFloat(prompt('Operand 1'));
const operand2 = Number.parseFloat(prompt('Operand 2'));
const sign = prompt('Enter Sign');
let result = null;

console.log('sign :>> ', sign);

switch (sign) {
  case '+':
    result = operand1 + operand2;
    alert(`result ${result}`);
    break;
  case '-':
    result = operand1 - operand2;
    alert(`result ${result}`);
    break;
  case '*':
    result = operand1 * operand2;
    alert(`result ${result}`);
  default:
    alert('Is not correct sign');
}
