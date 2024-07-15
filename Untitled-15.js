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
