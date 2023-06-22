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
}

const news = []

const formatDate = (day) => {
  let newDay = day;
  let month = 1;

  if (day > 31) {
    month += 1;
    newDay = 1;
  }

  return `${newDay}/${month}/2023`;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      news.push(new News(data[i].title, data[i].body, formatDate(i + 1), 'John Doe', tags))
    }
  })

// const news = [
//   new News('Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur.', '22/06/2023', 'John Doe', ['html', 'js', 'frontend', 'css']),
//   new News('Et tenetur repellat', 'Voluptatem suscipit optio modi facere saepe fugiat eligendi tempora iure non et.', '18/05/2023', 'John Doe', ['html', 'react', 'frontend'])]

console.log('news :>> ', news);


class NewsFeed {
  constructor(news) {
    this.news = news;
  }
}

const newsFeed = new NewsFeed(news);