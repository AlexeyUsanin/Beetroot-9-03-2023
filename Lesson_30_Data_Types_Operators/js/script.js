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
console.log('Boolean(0)', Boolean(0));
console.log('Boolean(1)', Boolean(1));
console.log('Boolean(2)', Boolean(2));
console.log('Boolean("")', Boolean(""));
console.log('Boolean(" ")', Boolean(" "));
console.log('Boolean(null)', Boolean(null));
console.log('Boolean({})', Boolean({}));
console.log('Boolean(undefined)', Boolean(undefined));

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

