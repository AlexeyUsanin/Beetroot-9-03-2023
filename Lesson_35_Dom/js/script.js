// const heading = document.getElementsByClassName('heading');
// const list = document.getElementById('list');
// const listItem = document.getElementsByTagName('li');
const heading = document.querySelector('.heading');
const headings = document.querySelectorAll('.heading');
//


const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');
console.log('boxes :>> ', boxes);
const span = box.querySelector('.span');
console.log('box :>> ', box);
console.log('span :>> ', span);

console.log('heading :>> ', heading);
// console.log('list :>> ', list);
// console.log('listItem :>> ', listItem);

//// Task List
const tasks = [
  {
    name: 'Зробити ДЗ 1',
    completed: false,
    deadline: '1/06/2023'
  },
  {
    name: 'Зробити ДЗ 2',
    completed: false,
    deadline: '6/06/2023'
  }
];

const h3 = document.createElement('h3');
h3.innerText = 'Heading 3';
h3.innerHTML = '<p>Heading 3</p>';

console.log('h3 :>> ', h3);


const list = document.querySelector('#list');

for (const item of tasks) {
  const listItem = document.createElement('li');
  listItem.innerText = item.name;

  // list.insertAdjacentHTML('afterbegin', `<li>${item.name}</li>`);
  // list.insertAdjacentHTML('afterend', `<li>${item.name}</li>`);
  // list.insertAdjacentHTML('beforebegin', `<li>${item.name}</li>`);
  // list.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`);

  list.append(listItem);
}