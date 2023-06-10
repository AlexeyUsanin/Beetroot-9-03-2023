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

const API_URL = 'https://jsonplaceholder.typicode.com';
const request = fetch(`${API_URL}/posts`);
let posts = [];

function renderPost(post) {
  const content = `
  <h3>${post.title}; Post id - ${post.id}</h3>
  <p>
  ${post.body}
  </p>`;

  const postContainer = document.querySelector('.post');
  postContainer.innerHTML = content;
}


function fetchById(id) {
  fetch(`${API_URL}/posts/${id}`)
    .then(response => response.json())
    .then(data => renderPost(data));
}

function renderPostList(data) {
  const postList = document.querySelector('.post-list');

  for (const post of data) {
    const li = document.createElement('li');
    const button = document.createElement('button');

    button.innerText = 'See more';
    li.innerText = post.title;

    // li.innerHTML = `${post.title} <button>See more</button>`;
    // li.insertAdjacentHTML('beforeend', '<button>See more</button>');
    // li.insertAdjacentElement('beforeend', button);

    button.addEventListener('click', function () {
      fetchById(post.id)
    })

    li.append(button);
    postList.append(li);
  }
}

request.then(response => {
  return response.json()
}).then(data => {
  renderPostList(data);
}).catch(error => {
  console.log('request error :>> ', error);
})


console.log('posts :>> ', posts);

fetch('data.json')
  .then(function (response) {
    console.log('Response data.json', response)
    return response.json();
}).then(function (data) {
  console.log('data.json :>> ', data);
});


const user = { name: 'Petro', age: 27 };

const stringifyJSON = JSON.stringify(user);
const parsedJson = JSON.parse(stringifyJSON);

// console.log('json :>> ', json);
console.log('stringifyJSON :>> ', stringifyJSON);
console.log('parsedJson :>> ', parsedJson);


function renderUserList(list) {
  for (const user of list) {
    const userCard = `
    <div class="col-sm-6">
    <div class="card" style="width: 18rem;">
      <img src="${user.avatar}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
        <p class="card-text">${user.email}</p>

      </div>
    </div>
    </div>`

    document.querySelector('#user-row').insertAdjacentHTML('beforeend', userCard);
  }
}

function fetchUsers() {
  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => renderUserList(json.data));
}

fetchUsers()

function getMoviesByPage(page) {
  fetch(`http://img.omdbapi.com/?apikey=[yourkey]&page=${page}`)
}

getMoviesByPage(1)
getMoviesByPage(2)
getMoviesByPage(3)

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDVmYTMwNDhkNjgxMDdiM2UxNjEzMDg2MWFkOGU3YSIsInN1YiI6IjVmN2M4OTc5ZmRmYzlmMDAzOGI0M2IwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bjR3aFVaX1BXe4UOUIMWfE2GUMGT9NPN7IsYzRGlTkE'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));