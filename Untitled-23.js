// Асинхронная функция

async function asyncFn() {
  // всегда возвращает промис
}

const asyncFn = async () => {
  // Всегда возвращает промис
};

// Практика 1
const asyncFn = async () => {
  return 'Success';
};
asyncFn().then((value) => console.log(value));

// Практика 2
const asyncFn2 = async () => {
  throw new Error('There was an error');
};

asyncFn2();
.then(value => console.log(value))
.catch(error => console.log(error.message))
//чтобы поймать эту ошибку, ее нужно поймать, используя метод catch

//Await. Ожидание результата
const timerPromise = () =>
  new Promise ((resolve,reject) => 
  setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  console.log ('Timer starts')
  await timerPromise()
  console.log('Timer ended')
}

asyncFn()

// async/await
const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

getData ('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.log(error.message))
// будет ощибка failed to fetch

// обработка ошибок Try/catch

const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'
try {
  const data = await getData(url)
  console.log(data)
} catch (error) {
  console.log(error.message))
}


