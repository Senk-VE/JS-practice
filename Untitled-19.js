// Циклы

//пример.1 без циклов

let i = 0;
console.log(i); //0
i++;
console.log(i); //1
i++;
console.log(i); //2
i++;
console.log(i); //3
i++;
console.log(i); //4

// пример 2. массив без цикла
const myArray = [true, 'abc', 10];
console.log(myArray[0]); //true
console.log(myArray[1]); //abc
console.log(myArray[2]); // 10

//пример 3. объект без цикла

const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};
console.log(myObject.x); // 10
console.log(myObject.y); // true
console.log(myObject.z); // abc

// Циклы. FOR

// for (начальная инструкция; Условие; Итерационное действие) {блок кода - выполняется на каждой итерации}

for (let k = 0; k < 5; k++) {
  console.log(k);
} // 0 1 2 3 4

// цикл for не рекомендуется использовать для массивов, лучше использовать 'forEach' 'map' 'reduce' это родные методы
// Но для примера for для массива
const myArrayFor = ['first', 'second', 'third'];
for (let m = 0; m < myArrayFor.length; m++) {
  console.log(myArrayFor[m]);
}

myArrayFor.forEach((element, index) => {
  console.log(element, index);
}); // first 0  second 1  third 2

//цикл While. Цикл выполняется пока условие правдиво. Блок инструкций, может быть ниразу не выполнен
//while (условие) {блок кода, выполняемый на каждой итерации}
//пример

let f = 0;
while (f < 5) {
  console.log(f); // выведет от 0 до 4.
  f++; //изменение переменной влияющей на условие, без нее будет бесконечный цикл, чего допускать
}

//цикл. 'while' может ниразу не выполниться, если условие изначальное ложно
// А вот 'do while' выполнится хотя бы один раз, потому что инструкция начинается с 'do'
// do {блок кода, выполняемый на каждой итерации} while (условие)
//цикл выполняется пока условие правдиво

let r = 0;
do {
  console.log(r);
  r++;
} while (r < 7); // от 0 до 6

//Цикл 'for in'.
// 'for' (key 'in' Object) {
//действие с каждым свойством объекта
//Значения свойства - Object[key] }

// key - Это название каждого свойства объекта.
// А получить значения к свойству объекта можно с помощью квадратных скобок, потому что 'key' Это переменная в этом блоке, и будет менятся

const myObject1 = {
  x: 10,
  y: true,
  z: 'abc',
};

for (const key in myObject1) {
  console.log(key, myObject1[key]);
}
// x 10
// y true
// z abc

// forEach для объектов

const myObject2 = {
  x: 10,
  y: true,
  z: 'abc',
};

Object.keys(myObject2).forEach((key) => {
  console.log(key + ': ' + myObject2[key]);
});

// x: 10
// y: true
// z: abc

// можно перебирать сразу значения свойств объекта, с помощью Object.values

Object.values(myObject2).forEach((value) => {
  console.log(value);
});

//10
//true
//abc

//For in для массивов. но forEach намного лучше!!!

const myArray2 = [true, 10, 'abc', null];
for (const key in myArray2) {
  console.log(myArray[key]);
}
// true
// abc
// 10
// undefined

//Цикл 'for of' появился в 2015 ES6

// for of для строк (Element of Iterable) {
//   //действие с определенным элементом
// }

const myString = 'Hey';
for (const letter of myString) {
  console.log(letter); // выводит 'H' 'e' 'y' по буквам
}

//for of для массива. НЕ для объектов

const myArrayForOf = [true, 10, 'abc', null];
myArrayForOf.forEach((element) => {
  console.log(element);
});

// true
// 10
// abc
// null
