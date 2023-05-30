const arr = [1, 2, 4, 5, 'a', 'b', 'c', {}, [], function() {} ];

console.log(typeof arr);
console.log('Array.isArray() :>> ', Array.isArray(arr));

console.log('arr.length:>> ', arr.length);

console.log('arr[0] :>> ', arr[arr.length - 1]);
console.log('arr.at :>> ', arr.at(-1));

arr[4] = 'd';
arr[11] = 11;

console.log('arr[10] :>> ', arr[10]);

const matrix = [[1], [1, 2, 3], [3]];

console.log('matrix :>> ', matrix[1][2]);

///////////////////////////////////////
/// Add/Remove

// Push
arr.push(12);
arr.push({});
arr.push([]);
arr.push(13);

// Pop
// arr.pop();
console.log('arr.pop() :>> ', arr.pop());


// Unshift
arr.unshift('t');

// Shift
console.log('arr.shift() :>> ', arr.shift());;

console.log('arr :>> ', arr);

////// Slice & splice /////

const nums = [1, 2, 3, 4, 5, 6];

// console.log('nums.slice(2, 5) :>> ', nums.slice(2, 5));

// console.log('nums :>> ', nums);

// nums.splice(0, 2, 'g', 's', 'w', 'd', {});

//// Concat & Spread/Rest ////
console.log('nums.concat(nums) :>> ', nums.concat([4, 6, 8, 3, 'df', 2, 1]));;
console.log('[...nums, ...nums] :>> ', [...nums, ...nums]); // Spread
//

const calcSum = (...nums) => { // Rest
  // arguments
  console.log('nums :>> ', nums);
}

///// Copy arrays ////

const copyArr = nums.slice();
// const copyArr = [...nums]; // Spread/Rest operator

/// Reverse
// console.log('nums.reverse() :>> ', nums.reverse());

/// To string
// console.log('toString :>> ', nums.toString());
// const arrToStr = nums.toString()
// console.log(' arrToStr>> ',  arrToStr);

// Split
// const str = 'Hello world!';

// console.log('split :>> ', str.split(''));

// console.log('nums :>> ', nums);

// console.log('arrToStr.split() :>> ', arrToStr.split(','));

// console.log('arrToStr.join() :>> ', arrToStr.join());

// 1.
const arrStr = nums.toString();
console.log('arrStr :>> ',arrStr);
// 2.
console.log('arrStr.split(', ') :>> ', arrStr.split(',').reverse());

/// '12345' === '12345'.split('').reverse().join('')

/// Includes
console.log('nums.includes(3) :>> ', nums.includes(3));

if (nums.includes(3)) {

}

/// IndexOf
console.log('nums.indexOf() :>> ', nums.indexOf('a'));


/// For / For-of / ForEach

const animals = ['panda','dog', 'cat'];

for (let i = 0; i < animals.length; i++) {
  console.log('animals :>> ', animals[i]);
}

for (const item of animals) {
  console.log('item :>> ', item);
}

// animals.forEach(function (el, index, array) {
//   console.log('el :>> ', el.toUpperCase(), index, array);
// })

animals.forEach((el, index, array) => {
  console.log('el :>> ', el.toUpperCase(), index, array);
})

////////  Find   //////
// const dog = animals.find(function (el) {
//   if (el === 'dog') return el;
// })

// function findAnimal(name) {
//   const animal = animals.find(function (el) {
//     if (el === name) return el;
//   })

//   return animal;

//   // return animals.find(function (el) {
//   //   if (el === name) return el;
//   // })
// }

// const findAnimal = (name) => animals.find((el) => { if (el === name) return el })

const findAnimal = (array, animalName) => array.find(el => el === animalName); // Find
const findIndexAnimal = animalName => animals.findIndex(el => el === animalName); // Find index

console.log('findAnimal :>> ', findAnimal(animals, 'cat'));
console.log('findIndexAnimal :>> ', findIndexAnimal('cat'));

/////// Filter ///////
console.log('nums :>> ', nums);


const filteredNums = nums.filter(function (el) {
  return el % 2 === 0;
})

const filterByEven = array => array.filter(el => el % 2 === 0);

console.log('filterByEven :>> ', filterByEven(nums));
console.log('filterByEven :>> ', filterByEven([2, 544, 677, 55, 66, 90, 30, 12, 47, 90]));


/// Map
const toUpperCase = animals.map(function (el) {
  return el.toUpperCase();
});

console.log('toUpperCase :>> ', toUpperCase);

/////// Sort //////

const unsortedNums = [6, 3, 10, 1, 4, 2, 8, 0]
// console.log('nums.sort() :>> ', unsortedNums.sort());

const desc = [...unsortedNums].sort(function (a, b) {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  if (a === b) {
    return 0;
  }
})

const asc = [...unsortedNums].sort(function (a, b) {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  if (a === b) {
    return 0;
  }
})

console.log('desc :>> ', desc);
console.log('asc :>> ', asc);
console.log('animals.sort() :>> ', animals.sort());


//// Reduce

const sum = nums.reduce(function (prev, next, index) {
  console.log('index :>> ', index);
  const result = prev * index;

  return result
})

console.log('sum :>> ', sum);


////// Arrays of Objects


const user = [
  { name: 'Petro', age: 24, role: 'student' },
  { name: 'Ivan', age: 35, role: 'student' },
  { name: 'Stepan', age: 66, role: 'teacher' },
  { name: 'Mykola', age: 18, role: 'student' }
]

// function filterByAge(array, age) {
//   return array.filter(function (el) {
//     if (el.age > age) {
//       return el
//     }
//   })
// }

const filterByAge = (array, age) => array.filter(el => el.age > age);

function filterByRole(array, role) {
  return array.filter(function (el) {
    if (el.role === role) {
      return el
    }
  })
}


function sortByBought() {

}


const products = [ { name: 'Apple', bought: false, quantity: 3, price: 30 }, { name: 'Orange' } ]

function convertNameToUpperCase(array, name) {
  // [...array]
  return array.map(function (el) {
    const clonedObj = { ...el };
    // const clonedObj = Object.assign({}, el);


    if (clonedObj.name === name && !el.bought) {
      return {
        ...clonedObj,
        bought: true
        quantity: quantity + 2
        sum: el.price * el.quantity
      }
    }

    // return { sum: el.price * el.quantity  }

    return el

    // return {
    //   ...el,
    //   name: el.name.toUpperCase(),
    //   // age: el.age,
    //   // role: el.role
    // }
  })
}



buyProduct([], 'Apple');

// {
//   name: 'table',
//   bought: true
// }

console.log('filterByAge :>> ', filterByAge(user, 30));

console.log('filterByRole :>> ', filterByRole(user, 'teacher'));

console.log('convertNameToUpperCase :>> ', convertNameToUpperCase(user));


const boughtItem = shoppingList.map(obj => !obj.status && obj.name === name  ? { ...obj, status: true } : obj);