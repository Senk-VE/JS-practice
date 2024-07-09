let a = 5;
let b = 3;
c = a + b;
console.log(c);

a = 10;
b = 13;
c = a + b;
console.log(c);

//функции

function sum(a, b) {
  //здесь a, b - это параметры функции
  const c = a + b;
  console.log(c);
}
sum(a, b);

a = 1;
b = 2;
sum(a, b);

//вызов функции
function myFn(x, y) {
  let z;
  x = x + 1;
  z = y + x;
  // console.log(z);
  return z;
}
myFn(100, 150);
console.log(myFn(100, 160));

//передача значения по ссылке
const personOne = {
  name: 'Bob',
  age: 24,
};

const personTwo = {
  name: 'Lina',
  age: 18,
};

function increasePersonAge(person) {
  person.age += 1;
  return person;
}
increasePersonAge(personOne);
console.log(personOne.age);
increasePersonAge(personOne); //увеличит еще на одну единицу
console.log(personOne.age);

increasePersonAge(personTwo);
console.log(personTwo.age);

//чтобы избежать мутации
function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person);
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age);
console.log(updatedPersonOne.age);
