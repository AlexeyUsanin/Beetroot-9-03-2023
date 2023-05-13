// console.log('Hi!', 'JS');
// console.error('Error!');
// console.warn('Warning!');

const a = 1;
let b = '2';
const text = "This is 'string'"; // Double quotes
// const text = 'This is "string" '; // Single quotes
// const text = `This is "string" `; // Template string

const firstName = 'Steven';
const lastName = 'Sigal';
// const fullName = firstName + ' ' + lastName; // Concatenation
const fullName = `${firstName} ${lastName}`; // Interpolation

console.log('fullName', fullName);

const result = a + Number(b);
console.log('result -> ', result);

console.log(a);
console.log(b);
console.log('string:', text);

let c = 3;
console.log(c);
c = 5;
console.log(c);

const firstUserName = 'Petro'; // Camel case
const first_user_name = 'Ivan'; // Snake case
// const first-user-name = ''; // Kebab case
const FirstUserName = '' // Pascal case
const FIRST_USER_NAME = '';

console.log('firstUserName: ', firstUserName);

// alert('Hello JS!');

const operand1 = prompt('Enter number 1');
const operand2 = prompt('Enter number 2');
console.log(Number(operand1) + Number(operand2))
alert(Number(operand1) + Number(operand2))
alert(num);

const question = confirm('Are you agree?');

console.log('question :>> ', question);
// console.log('num', Number(num));