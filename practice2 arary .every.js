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
