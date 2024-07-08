//Мутация. мутирование копий
const person = {
  age: 22,
  name: 'Mike',
};

//копирование ссылки. copy by reference
const person2 = person;

person2.age = 23;
person2.profession = 'driver';

console.log(person2);

//как избежать мутации
//вариант 1. не работает с вложенными объектами

const person3 = {
  age: 32,
  name: 'Tiffany',
};
console.log(person3);

const person4 = Object.assign({}, person3);
person4.age = 33;
console.log(person3, person4);

//вариант 2 . не работает с вложенными объектами, но немного короче.
const person5 = { name: 'Bob', age: 20 };
const person6 = { ...person5 };
console.log(person6);

//вариант 3 . С использованием JSON (parse/stingify). не вызывает мутации.
const person7 = {
  name: 'Valery',
  age: 25,
  eyeColor: 'green',
};

const person8 = JSON.parse(JSON.stringify(person7));
person8.name = 'Marley';
console.log(person7, person8);

const person9 = person8;
person9.age = 30;

console.log(person8);
