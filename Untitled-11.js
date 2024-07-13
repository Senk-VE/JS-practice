// оператор для конкатенации строк
let a = 'hello ' + 'world';
console.log(a);

const hello = 'hello';
const world = 'world';
// const greeting = hello + ' ' + world;
// console.log(greeting);

// это сложно, поэтому в JS есть шаблонные строки (Template String Literal Types)
const greeting = `${hello} ${world}`;
console.log(greeting);

const myName = 'Jack';
const myCity = 'New-York';
const myPlace = `Hi, i'm ${myName} and i'm leave in ${myCity}`;

console.log(myPlace);
