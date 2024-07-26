// .charAt(0) используется для получения символа строки по указанному индексу
// .substring(1) используется для извлечения подстроки из исходной строки
// в итоге получаем первый символ строки заглавным
const capitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};
console.log(capitalized('steps'));

// замена значения
// метод .replace (a,b) где а заменяем на b
const a = 'good morning';
const b = a.replace('morning', 'evening');
console.log(b);
// заменя с использованием регулярного выражения
const a = 'good morning';
const b = a.replace(/morning/g, 'evening');
console.log(b);

let str = 'Hello, World!'; // str.substring(indexStart, indexEnd) // Если indexStart больше indexEnd, substring меняет их местами.
console.log(str.substring(7, 12)); // "World"
console.log(str.substring(7)); // "World!" // Если indexEnd не указан, извлечение продолжается до конца строки.

let str = 'Hello, World!'; // str.substr(start, length)
console.log(str.substr(7, 5)); // "World"
console.log(str.substr(7)); // "World!" // Если length не указан, извлечение продолжается до конца строки

// замена элемента массива, где первый элемент массива имеет индекс 0

const myArray = ['abbc', true, 846];
console.log(myArray);

myArray[1] = false;
console.log(myArray);

// метод массива splice
let array = [1, 2, 3, 4, 5];
array.splice(array.length, 0, 6, 7);
console.log(array); // [1, 2, 3, 4, 5, 6, 7]

// перебор массива forEach
const myArray = ['apple', 'banana', 'pear'];
myArray.forEach((fruit) => console.log(`fruit: ${fruit}`));
