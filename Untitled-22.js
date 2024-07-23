// Создание промиса

const myPromise = new Promise((resolve, reject) => {
  // выполнение асинхронных действий
  // внутри этой функции нужно в результате вызвать одну из функций resolve и reject
});

// Получение результата промиса

myPromise
  .then((value) => {
    // действие в случае успешного исполненияпромиса
    // значение value - это значение, переданное в вызове функции resolve внутри Промиса
  })
  .catch((error) => {
    // действие в случае отклонения Промиса
    // значение error - это значение, переданное в вызове функции reject внутри Промиса
  });

  // Функции fetch есть только в браузерах, в node.js ее нет
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response = response.json()))
  .then((json = console.log(json)))
  .catch((error) => console.error(error));

  // Практика 1
  fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response => {
    console.log(response
                 return response.json()
    })
  .then((json = console.log(json))
  .catch((error) => console.error(error))

  // практика 2
  const getData = (url) =>
    new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error))
    );