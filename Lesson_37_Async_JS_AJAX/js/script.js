// console.log('Console 1');
// alert('Alert');

const ul = document.createElement('ul');
document.querySelector('.box').append(ul);

let tasks = [
  {
    name: 'Зробити ДЗ 1',
    completed: true,
    deadline: '1/06/2023',
    id: 1
  },
  {
    name: 'Зробити ДЗ 2',
    completed: false,
    deadline: '6/06/2023',
    id: 2
  }
];
//// setTimeout /////
setTimeout(function () {
  // console.log('Console 2');

  for (const item of tasks) {
    const li = document.createElement('li');
    li.innerText = item.name;

    ul.append(li);
  }

  // alert('Please subscribe')
}, 2000);

// console.log('Console 3');

///// setInterval /////
let count = 0;
let ok = true;

function showGreeting() {
  ok = confirm('Hello');
}

let interval = null;

console.log('ok :>> ', ok);


// function resetInterval() {
//   if (ok) {
//     clearInterval(interval);
//   }
// }

// interval = setInterval(() => {
//   count++
//   console.log('Interval:>> ', count);
//   showGreeting();
//   resetInterval();
// }, 5000);

// showGreeting();

console.log('ok :>> ', ok);


/////// Promise ////////
const condition = false;

function checkAge(age) {
  // const age = prompt('Enter age!');

  return age > 18 ? true : false
}


console.log('Console 1');

const promise = new Promise(function (resolve, reject) {
  if (checkAge(19)) {
    resolve('Success!');
  } else {
    reject('Fail!')
  }
});

console.log('promise :>> ', promise);

promise.then(function (data) {
  console.log('data 1--->', data);
  // alert(data);
  console.log('Console 2');

  return data;
}).then(function (data) {
  console.log('data 2:>> ', data.toUpperCase());

  console.log('Console 3');

})
  .catch(function (error) {
  console.log('error :>> ', error);
  // alert(error);
}).finally(function () {
  console.log('Finally!');
  console.log('Console 4');
})

console.log('Console 5');

///////// Fetch ////////
const request = fetch('https://jsonplaceholder.typicode.com/posts');
console.log('request :>> ', request);

request.then(data => {
  console.log('request data :>> ', data);
}).catch(error => {
  console.log('request error :>> ', error);
})