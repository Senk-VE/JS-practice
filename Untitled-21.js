//Классы и прототипы
//Пример класса

class Comment {
  constructor(text) {
    this.text = text; // меременная 'this' указывает на экземпляр класса
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

//Создание нового экземпляра
const firstComment = new Comment('First comment'); // вызывается функция constructor где 'new' префиксный унитарный оператор
console.log(firstComment); // Comment { text: 'First comment', votesQty: 0 }
// метод 'uovote' является унаследованным с родительского класса Comment
// Поэтому в образце, метод 'upvote' виден на уровне прототипа

//Проверка Принадлежности к тому или иному классу
console.log(firstComment instanceof Comment); //true
console.log(firstComment instanceof Object); //true
console.log(firstComment instanceof Array); // false

//Вызов метода
firstComment.upvote();
console.log(firstComment.votesQty); // 1
firstComment.upvote();
console.log(firstComment.votesQty); // 2

// Проверка принадлежности свойств экземпляру объекта
console.log(firstComment.hasOwnProperty('text')); // true
console.log(firstComment.hasOwnProperty('votesQty')); // true
console.log(firstComment.hasOwnProperty('upvote')); // false
console.log(firstComment.hasOwnProperty('hasOwnProperty')); // false

// Создание нескольких экземпляров
const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment');

// Статические методы

console.log(Comment.mergeComments('First comment', 'Second comment')); // First comment Second comment

// Расширение других классов
class NumbersArray extends Array {
  // расширение класса Array.
  sum() {
    return this.reduce((el, acc) => acc + el, 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);
console.log(myArray);
myArray.sum();

//Что такое прототип

console.log(Comment.prototype === firstComment.__proto__); // true

// Строки и числа ведут себя как объекты

const myName = 'Norman';
console.dir(myName);
