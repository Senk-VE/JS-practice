// Тернарный оператор

// Условие ? Выражение 1 : Выражение 2

//пример 1

const value = 11;

value ? console.log('Условие истино') : console.log('Условие ложно'); // Условие истино

console.log(
  value ? console.log('Условие истино') : console.log('Условие ложно')
);

//пример 2
// const value1 = 11;
// const value2 = 25;

// value1 && value2 ? myFunction1(value1, value2) : myFunction2();

// Пример 3
let value3 = 11;
console.log(value3 >= 0 ? value3 : -value3);

value3 = -5;
const res = value3 >= 0 ? value3 : -value3;
console.log(res);
