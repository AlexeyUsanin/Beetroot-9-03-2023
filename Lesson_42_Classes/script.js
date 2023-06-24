// const car = {
//   name: 'Audi',
//   year: 2019,
//   showInfo: function () {
//     this.name
//   }
// };

// const honda = Object.assign({}, car);
// const honda = { ...car };

// honda.name = 'Honda';
// honda.year = 2020;

// const toyota = { ...car };

// toyota.name = 'Toyota';
// toyota.name = 2017;


//////////////////////////////////////////////////////////////
class Car {
  constructor(carName, year) {
    this.name = carName;
    this.year = year;
  }

  showInfo() {
    return `Car: ${this.name}; Year: ${this.year}`;
  }

  updateYear(newYear) {
    this.year = newYear;
  }

  setData(newYear, newName) {
    this.updateYear(newYear);
    this.name = newName;
  }
}

const honda = new Car('honda', 2017);
const toyota = new Car('toyota', 2022);

honda.updateYear(2023);

toyota.setData(2021, 'Lexus');

console.log(honda.showInfo());
console.log(toyota.showInfo());


console.log('honda :>> ', honda);
console.log('toyota :>> ', toyota);

////////////////////////////////////////////////////////////
const tags = ['html', 'js', 'frontend', 'css'];


class News {
  constructor(title, description, date, author, tags) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.author = author;
    this.tags = tags;
  }

  renderNews() {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const text = document.createElement('p');
    const tags = document.createElement('span');
    const date = document.createElement('span');
    const author = document.createElement('span');

    title.innerText = this.title;
    text.innerText = this.description;
    tags.innerText = this.tags;
    date.innerText = this.date;
    author.innerText = this.author;

    li.append(title);
    li.append(text);
    li.append(tags);
    li.append(date);
    li.append(author);

    return li;
  }
}

const formatDate = (day) => {
  let newDay = day;
  let month = 1;

  if (day > 31) {
    month += 1;
    newDay = 1;
  }

  return `${newDay}/${month}/2023`;
}

// const news = [
//   new News('Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur.', '22/06/2023', 'John Doe', ['html', 'js', 'frontend', 'css']),
//   new News('Et tenetur repellat', 'Voluptatem suscipit optio modi facere saepe fugiat eligendi tempora iure non et.', '18/05/2023', 'John Doe', ['html', 'react', 'frontend'])]


class Post extends News {
  constructor(title, description, date, author, tags, comments, link) {
    super(title, description, date, author, tags);
    this.comments = comments;
    this.link = link;
  }

  renderPost() {
    const h1 = document.createElement('h1');
    const desc = document.createElement('p');
    const post = document.querySelector('.post');
    const link = document.createElement('a');
    const comment = document.createElement('p');

    post.innerHTML = '';

    comment.innerText = this.comments;
    link.setAttribute('href', this.link);
    link.innerText = 'Original Resource'
    h1.innerText = this.title;
    desc.innerText = this.description;

    post.append(h1);
    post.append(desc);
    post.append(link);
    post.append(comment);
  }
};

// const post = new Post('Post Title', 'Some text', '12/12/2020', '');

// console.log('news :>> ', news);
// console.log('post :>> ', post);

class NewsFeed {
  constructor() {
    this.news = [];
    this.fetchNews();
  }

  fetchNews() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(data => {

        for (let i = 0; i < data.length; i++) {
          this.news.push(new News(data[i].title, data[i].body, formatDate(i + 1), 'John Doe', tags))
        }

        return this.news;
      })
      .then(data => {
        this.renderNews(data);
    })
  }

  renderNews(news) {
    const list = document.querySelector('#news');

    for (const item of news) {
      const newsItem = new News(item.title, item.description, item.date, item.author, item.tags);
      const listItem = newsItem.renderNews();
      const button = document.createElement('button');

      button.innerText = 'Show Post';

      button.addEventListener('click', function () {
        const post = new Post(item.title, item.description, item.date, item.author, item.tags, ['some comment'], 'http://');
        post.renderPost();
      })

      listItem.append(button);
      list.append(listItem);
    }
  }
}

const newsFeed = new NewsFeed();


console.log('newsFeed :>> ', newsFeed);