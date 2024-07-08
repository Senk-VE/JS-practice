// создание переменной myCity
const myCity = {
  city: 'London',
  popular: true,
  number: 1666,
};
console.log(myCity);

// удаление свойства
delete myCity.number;
console.log(myCity);

// добавление свойства
const countryNumber = 'number';
myCity[countryNumber] = 1667;
console.log(myCity);

//добавление метода
myCity['cityGreeting'] = function () {
  console.log('Greeting!');
};

console.log(myCity);

//вызов метода
myCity.cityGreeting();

// JSON
const post = {
  title: 'my post',
  number: 1,
};
console.log(post);

const stringifiedPost = JSON.stringify(post);
console.log(stringifiedPost);

const parsedPost = JSON.parse(stringifiedPost);
console.log(parsedPost);
