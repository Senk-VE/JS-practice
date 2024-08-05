// Массивы
// проверка сортировка массива. метод .every

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

function arraySortInfo(inputArray) {
  if (!inputArray.every((element) => typeof element === 'number')) {
    // Проверяем, что все элементы массива являются числами
    return 'Некоторые элементы не являются числами';
  }
  const isSortedAscending = inputArray.every((value, index, arr) => {
    // Проверяем, отсортирован ли массив по возрастанию
    return index === 0 || arr[index - 1] <= value;
  });
  if (isSortedAscending) {
    return 'Массив отсортирован по возрастанию';
  }
  const isSortedDescending = inputArray.every((value, index, arr) => {
    // Проверяем, отсортирован ли массив по убыванию
    return index === 0 || arr[index - 1] >= value;
  });
  if (isSortedDescending) {
    return 'Массив отсортирован по убыванию';
  }
  return 'Массив не отсортирован'; // Если не отсортирован
}

console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
console.log(arraySortInfo(d)); // Массив не отсортирован

// сравнение двух массивов
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((item, index) => item === secondArray[index])
  ) {
    return true;
  }
  return false;
};

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false

//метод .includes
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

const isElementInArray = (inputArray, searchElement) => {
  return inputArray.includes(searchElement); // возвращает true если нашелся искомый элемент, возвращает false если нет
};
console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true

//
const isElementInArray = (searchElement, inputArray) => {
  if (typeof searchElement !== 'object') {
    // проверка является ли элемент объектом
    return inputArray.includes(searchElement); // если искомый элемент это не объект, а значение, он возвращает true или false
  }

  return inputArray // если элемент является объектом,
    .map((element) => JSON.stringify(element)) // .map преобразует каждый элемент массива в строку
    .includes(JSON.stringify(searchElement)); // Проверяет, есть ли строка JSON, представляющая searchElement, в массиве строк JSON
};
