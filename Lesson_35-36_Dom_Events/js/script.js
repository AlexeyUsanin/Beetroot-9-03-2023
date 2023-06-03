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
  listItem.setAttribute('id', item.id);

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
    const id = Number(this.closest('.list__item').getAttribute('id'));
    this.closest('.list__item').remove();

    tasks = tasks.filter(item => item.id !== id);

    console.log('tasks :>> ', tasks);

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
  const list = document.querySelector('#list'); // UL
  list.innerHTML = '';

  for (const item of tasks) {
    const listItem = renderListItem(item);

    list.append(listItem);
  }
}

renderTaskList(tasks);

const form = document.querySelector('#form');


// form.onsubmit = function (event) {
//   event.preventDefault();
//   console.log('Submit');

//   const taskName = document.querySelector('#task-name');
//   const taskDate = document.querySelector('#task-date');
//   const inputs = form.querySelectorAll('input');

//   console.log('taskName.value :>> ', taskName.value);
//   console.log('taskDate.value :>> ', taskDate.value);

//   console.log('inputs :>> ', inputs);

//   const item = {
//     name: taskName.value,
//     deadline: taskDate.value,
//     completed: false,
//     id: tasks.at(-1).id + 1
//   }
//   // const listItem = renderListItem(item);

//   tasks.push(item); // JS
//   // list.append(listItem); // HTML
//   renderTaskList(tasks);

//   for (const el of inputs) {
//     el.value = '';
//   }

//   // taskName.value = '';
//   // taskDate.value = '';

//   console.log('tasks :>> ', tasks);
// }

form.addEventListener('submit', function (event) {
  console.log('event :>> ', event);
  event.preventDefault();
  console.log('Submit');

  const taskName = document.querySelector('#task-name');
  const taskDate = document.querySelector('#task-date');
  const inputs = form.querySelectorAll('input');

  console.log('taskName.value :>> ', taskName.value);
  console.log('taskDate.value :>> ', taskDate.value);

  console.log('inputs :>> ', inputs);

  const item = {
    name: taskName.value,
    deadline: taskDate.value,
    completed: false,
    id: tasks.length === 0 ? 1 : tasks.at(-1).id + 1
  }

  tasks.push(item); // JS
  renderTaskList(tasks);

  for (const el of inputs) {
    el.value = '';
  }
})


const buttonLink = document.querySelector('#link');
const div = document.querySelector('#box');

buttonLink.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('event LINK CLICK :>> ', event);
})

div.addEventListener('click', function () {
  event.stopPropagation();
  console.log('event DIV CLICK:>> ', event);
})

document.addEventListener('keydown', function (event) {
  console.log('event :>> ', event);

  // if (event.code === 'F5') {
  //   event.preventDefault()
  // }
})

form.addEventListener('click', function (event) {
  console.log('event FORM CLICK:>> ', event);
})

//////////////////// DROPDOWN MENU /////////////////
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownMenu = document.querySelector('.dropdown__menu');
const sortNameBtn = document.querySelector('.sort-name');
const sortDateBtn = document.querySelector('.sort-date');


dropdownBtn.addEventListener('click', function () {
  dropdownMenu.classList.toggle('opened');
})


function closeDropdown() {
  dropdownMenu.classList.remove('opened');
}


function sortByName() {
  tasks.sort(function (a, b) {
    if (a.name < b.name) {
      return -1
    }

    if (a.name > b.name) {
      return 1
    }

    if (a.name === b.name) {
      return 0
    }
  })
  console.log('tasks :>> ', tasks);
}

function sortByDate() {
  tasks.sort(function (a, b) {
    const localDate1 = new Date(a.deadline);
    const localDate2 = new Date(b.deadline);

    const date1 = new Date(localDate1).getTime();
    const date2 = new Date(localDate2).getTime();


    console.log('date1 :>> ', date1);
    console.log('date2 :>> ', date2);

    if (date1 < date2) {
      return -1
    }

    if (date1 > date2) {
      return 1
    }

    if (date1 === date2) {
      return 0
    }
  })

  console.log('tasks :>> ', tasks);
}

sortNameBtn.addEventListener('click', function () {
  sortByName();
  renderTaskList(tasks);
  closeDropdown();
})

sortDateBtn.addEventListener('click', function () {
  sortByDate();
  renderTaskList(tasks);
  closeDropdown();
})