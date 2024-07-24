// import SumNumbers from './Untitled-20a.mjs'; .то был пример 1 ... закомментировал, так как дефолтного экспорта уже нет
import { sum, mult as multNumbers } from './Untitled-20a.mjs';
import { one as oneRenamed, two } from './Untitled-20a.mjs'; // имена переменных должны совпадать, или использовать конструкцию 'as'

// const res = SumNumbers(10, 2);
// console.log(res);

//node Untitled-20b.mjs (в терминале покажет 12 как сумму функции)

console.log(oneRenamed);
console.log(two);
console.log(sum(10, 2));
console.log(multNumbers(10, 2));
