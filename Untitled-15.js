//массивы

const myArray = [1, 2, 3];
console.log(myArray); // [ 1, 2, 3 ]

const myArray2 = new Array(1, 2, 3);
console.log(myArray2); // [ 1, 2, 3 ]

const myArray3 = [1, true, 'string'];
console.log(myArray3); // 1, true, 'string'

console.log(myArray3.length); // 3

console.log(myArray === myArray2); // значение false, потому что это разные объекты, несмотря на одинаковые значения

const myArrayCopy = myArray;
console.log(myArray === myArrayCopy); // значение true, потому что ссылаются на один и тот же объект

const myArray4 = [1, 2, 3];
const myObject = {
  0: 1,
  1: 2,
  2: 3,
  lenght: 3,
};
console.log(myArray4, myObject); // прототип для myArray4 - Array, а для myObject - Object

myArray[2] = 'abc';
console.log(myArray); // третий элемент заменен на 'abc'

myArray[3] = true;
console.log(myArray); // так как было 3 индекса (0,1,2), при добавлении [3] появился четвертый
console.log(myArray.length);

//методы массивов. push pop shift unshift forEach map

const myArrayMethod = [1, 2, 3];
console.log(myArrayMethod);

myArrayMethod.push(4); // метод push ожидает значения, которое добавит в конец массива. и эта переменная наследует все методы массивов
console.log(myArrayMethod); // [ 1, 2, 3, 4, true ]

myArrayMethod.push(true);
console.log(myArrayMethod);

myArrayMethod.pop(); // удаляет последний элемент в массиве. Не требует аргумента.
console.log(myArrayMethod); // [ 1, 2, 3, 4 ]

const removedElement = myArrayMethod.pop();
console.log(myArrayMethod, removedElement); // удаляется последний элемент [ 1, 2, 3 ] и присваивается значение удаленного элемента (4) новой переменной

myArrayMethod.unshift(true); // unshift добавил новый элемент (true) в начале
console.log(myArrayMethod); // [ true, 1, 2, 3 ]

myArrayMethod.shift(); // было [ true, 1, 2, 3 ] стало [1, 2, 3 ]
const removedElementShift = myArrayMethod.shift(); // удалили первый элемент b и присвоили переменной
console.log(myArrayMethod, removedElementShift); // стало [ 2, 3 ] и новой переменной присвоили удаленное значение (1)

// forEach. перебирает все элементы массива.

const myArrayForeach = [1, 2, 3];
myArrayForeach.forEach((el) => console.log(el * 2)); // выводит 2 4 6.

//map. также ожидает колбэк функцию, но map возвращает новый массив. Но map создает абсолютно новый массив.

const myArrayMap = [1, 2, 3];
const newArray = myArrayMap.map((el) => el * 3);
console.log(myArrayMap);
console.log(newArray);
