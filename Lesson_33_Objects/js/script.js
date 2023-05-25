// Objects
const user = {
  name: 'John',
  lastName: 'Doe',
  age: 57,
  address: {
    city: 'NY',
    country: 'US'
  },
  drivers: 'Stepan, Mykola'
};

user.role = 'student'; // dot notation
user['sex'] = 'male';

const key = 'role';

console.log(user.age);
console.log(user.address);
console.log(user.address.city);
console.log('user[key]; :>> ', user[key]);
console.log('age' in user);

if ('age' in user) {
  100 - user.age
}

for (let key in user) {
  console.log('key:value', key, user[key]);
  console.log('value', user[key]);
}

// const obj = new Object();

// const admin = user; // Reference copy

const student = {
  name: 'Mike',
}

// const admin = Object.assign({}, user, student);
const admin = Object.assign({}, user);

// admin.name = 'Admin';
// admin.lastName = 'Admin';
// admin.age = 100;
// admin.permission = 'admin';

const clonedObj = {};

for (let key in user) {
  clonedObj[key] = user[key];
}

console.log('clonedObj :>> ', clonedObj);
console.log('user :>> ', user);
console.log('admin :>> ', admin);

///// Methods
const parameters = {
  width: 200,
  height: 100,
  x: 0,
  y: 0,
  getWidth: function () {
    return this.width;
  },
  setWidth: function(newWidth) {
    this.width = newWidth;
  },
  moveX: function (x) {
    this.x = x;
  },
  getArea: function() {
    return this.width * this.height;
  },
}

parameters.moveY = function (y) {
  this.y = y;
}

// const parameters = {
//   width: 200,
//   height: 100,
//   x: 0,
//   y: 0,
//   getWidth: function () {
//     return this.width;
//   },
//   setWidth: function(newWidth) {
//     this.width = newWidth;
//   },
//   moveX: function (x) {
//     this.x = x;
//   },
//   getArea: function() {
//     return this.width * this.height;
//   }
// };

parameters.setWidth(500);
parameters.moveX(100);
console.log('getArea', parameters.getArea());


console.log('getWidth', parameters.getWidth());

console.log('parameters.width', parameters.width);

const rect = document.querySelector('#rectangle');

// parameters.x = 100;
// parameters.y = 100;

rect.style.width = `${parameters.width}px`;
rect.style.height = `${parameters.height}px`;
rect.style.top = `${parameters.y}px`;
rect.style.left = `${parameters.x}px`;

console.log('rect :>> ', rect);


///

console.log('Object.keys(parameters)', Object.keys(parameters));
console.log('Object.values(parameters)', Object.values(parameters));
console.log('Object.entries(parameters)', Object.entries(parameters));


const fraction1 = {
  x: 2,
  y: 5
}

const fraction2 = {
  x: 2,
  y: 5
}


const math = {
  add: function (obj1, obj2) {

  },
  minus: function (obj1, obj2) {

  }
}

math.add(fraction1, fraction2);