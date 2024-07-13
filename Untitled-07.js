//Глобальные и локальные переменные
let a;
let b;

function myFn() {
  let b; //локальная пересенная
  a = true;
  b = 10;
  console.log(b);
}

myFn();
console.log(a); //a - true, потому что переменная a не объявлена локально в функции
console.log(b); //b - undefined, потому b=10 что объявлена локально

//цепочка областей видимости
const x = 5;
function secondFn() {
  function innerFn() {
    console.log(x); //5
  }
  innerFn();
}
secondFn();

//Необъявленная переменная. Не рекомендуется так делать!
function myThirdFn() {
  e = false;
  console.log(e);
}
myThirdFn();
console.log(e);

//'use strict' это инструкция для JS запрещает использование необъявленных переменных
