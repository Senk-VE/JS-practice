//Функциональные выражения
const myFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

// myFunction(5, 3);
console.log(myFunction(5, 3));

setTimeout(function () {
  console.log('hello world');
}, 100);

//Стрелочная функция

setTimeout(() => {
  console.log('here i am');
}, 2000);

//сокращенный вариант написания функции
(a) => {
  //тело фунции
};

(a, b) => a + b; //implicit return (неявное возвращение)

const Mult = (value, multiplier = 1) => {
  return value * multiplier;
};
console.log(Mult(7, 4)); //28

//значение параметров функции по умолчанию

const newPost = (post, addedAt = Date()) => ({
  // если не обернуть фигурные скобки круглыми - движок подумает что это функция
  ...post,
  addedAt,
});
const firstPost = {
  id: 1,
  aithor: 'Bogdan',
};
console.log(newPost(firstPost));
