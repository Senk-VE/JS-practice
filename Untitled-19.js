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
