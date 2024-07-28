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

// setTimeout (встроенная асинхронная функция) которая выдает задержку в милисекундах
//пример.
setTimeout(callbackFunction, delayInMilliseconds, [arg1, arg2, ...]); // синтаксис
//пример
function greet(name) {
  console.log(`Привет, ${name}!`);
}
setTimeout(greet, 1500, 'Алекс');
// отменяет выполнение
clearTimeout(timerId); // Отменяет выполнение функции
//setInterval
setInterval(function, interval, [arg1, arg2, ...]); 
clearInterval(intervalId); // clearInterval останавливает выполнение функции, если она больше не нужна.
//пример
let count = 0; // Счетчик для отслеживания количества сообщений
function printMessage() { // Функция, которая будет выполняться каждые 2 секунды
  count++;
  console.log(`Сообщение номер ${count}`);
  if (count >= 5) {  // Проверка, достигли ли мы 5 сообщений
    clearInterval(intervalId); // Остановка интервала
  }
}
const intervalId = setInterval(printMessage, 2000); // Устанавливаем интервал, который вызывает функцию printMessage каждые 2000 миллисекунд (2 секунды)

// Оператор %
// Проверка на четность
let number = 7;
if (number % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}
// Остаток
let dividend = 10;
let divisor = 3;
let remainder = dividend % divisor;
console.log(remainder); // Выведет 1

// Массив
// замена элемента массива, где первый элемент массива имеет индекс 0
const myArray = ['abbc', true, 846];
console.log(myArray);
myArray[1] = false;
console.log(myArray);

// метод массива splice
let array = [1, 2, 3, 4, 5];
array.splice(array.length, 0, 6, 7); // (start, deleteCount, item1, item2, ...)
console.log(array); // [1, 2, 3, 4, 5, 6, 7]

// перебор массива forEach
const myObject = {  key1: true,  key5: 10,  key3: 'abc',  key4: null,  key10: NaN,}
const objectKeys = Object.keys(myObject)
objectKeys.forEach((key) => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key])  }})
