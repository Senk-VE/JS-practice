const objectA = { a: 10, b: true };
console.log(objectA);

// изменение значения
objectA.a = 20;
console.log(objectA);

//добавление свойства
const copyOfA = objectA;
copyOfA.c = 'white';
console.log(copyOfA);

//вывод функции a()
function d() {
  console.log('hey there');
}
d();

//при замене значения переменной a, вызов функицц приведет к ошибке (a is not a function)
// a = 10;
// a();
