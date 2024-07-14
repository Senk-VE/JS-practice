// что происходит в случае ошибок

// const fnWithError = () => {
//   throw new Error('Some error');
// };

// fnWithError(); // выполнение кода остановится после появления uncaught ошибки
// console.log('Continue ...');

// try {
//выполнение блока кода
// } catch (error) {
//этот блок выполняется в случае возникновения ошибок в блоке try
// }

const fnWithError = () => {
  throw new Error('some error');
};

try {
  fnWithError();
} catch (error) {
  console.error(error); // выводится целая ошибка
  console.log(error.message); // выводится только сообщение
}

console.log('Continue ...');
