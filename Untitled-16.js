// Функция Деструктуризации объекта

const userProfile = {
  name: 'Charley',
  commentsQty: 23,
  hasSignAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignAgreement } = userProfile; // объявление новых переменных и присвоение значений на основе значений свойств объекта

console.log(name, commentsQty);
console.log(hasSignAgreement);

// Деструктуризация массивов

const fruits = ['apple', 'orange'];
const [appleOne, orangeOne] = fruits; // переменные указываются в квадратных скобках.
console.log(appleOne, orangeOne); // Новые переменные будут соответствовать порядку индексу в массиве, т.е. порядок имеет значение.

// деструктуризация в функциях
// const userProfile = {
//     name: 'Charley',
//     commentsQty: 23,
//     hasSignAgreement: false,
//   };

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile)); // User Charley has 23 comments
