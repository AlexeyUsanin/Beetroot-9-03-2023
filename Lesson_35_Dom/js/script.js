// const heading = document.getElementsByClassName('heading');
// const list = document.getElementById('list');
// const listItem = document.getElementsByTagName('li');
const heading = document.querySelector('.js-heading');
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
    completed: true,
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

// list.insertAdjacentHTML('afterbegin', `<li>${item.name}</li>`);
// list.insertAdjacentHTML('afterend', `<li>${item.name}</li>`);
// list.insertAdjacentHTML('beforebegin', `<li>${item.name}</li>`);
// list.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`);


function renderListItem(item) {
  const listItem = document.createElement('li');  // li
  const checkbox = document.createElement('input'); // input[type="checkbox"]
  const button = document.createElement('button');
  const listItemText = document.createElement('span');  // li

  checkbox.setAttribute('type', 'checkbox');

  button.innerText = 'Delete';
  listItemText.innerText = `Name: ${item.name} | Deadline: ${item.deadline}`;

  // listItem.style.margin = '10px';
  listItem.classList.add('list__item');
  checkbox.classList.add('list__item-checkbox');
  button.classList.add('list__item-button');

  listItem.prepend(checkbox);
  // listItem.append(checkbox);
  listItem.append(listItemText);
  listItem.append(button);

  checkbox.onchange = function () {
    console.log('this :>> ', this);
    console.log('checkbox changed', )

    // console.log('listItem.classList.contains', listItem.classList.contains('completed'));

    if (this.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }

  button.onclick = function () {
    // const el = this.parentElement;
    this.closest('.list__item').remove()
    // this.parentNode.nextElementSibling // next element
    // this.parentNode.prevElementSibling // prev element


    // console.log('el :>> ', el);

    // el.remove()
  }


  if (item.completed) {
    listItem.classList.add('completed');
    checkbox.checked = true;
  }

  console.log('listItem :>> ', listItem);
  return listItem;
}

function renderTaskList(tasks) {
  const list = document.querySelector('#list');

  for (const item of tasks) {
    const listItem = renderListItem(item);

    list.append(listItem);
  }
}

renderTaskList(tasks);


const form = document.querySelector('#form');

form.onsubmit = function (event) {
  event.preventDefault();
  console.log('Submit');

  const taskName = document.querySelector('#task-name');
  const taskDate = document.querySelector('#task-date');

  console.log('taskName.value :>> ', taskName.value);
  console.log('taskDate.value :>> ', taskDate.value);

  tasks.push({
    name: taskName.value,
    deadline: taskDate.value,
    completed: false
  })

  console.log('tasks :>> ', tasks);
}
