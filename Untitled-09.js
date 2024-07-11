//Примеры с операторами. Условные инструкции
let a = !10; //false
let b = !0; //true, потому что 0 это ложное значение
let c = !'abc'; //false
let d = !''; // true - потому что пустая строка ложное значение
let e = !true; //false
let f = !undefined; //true
console.log(a, b, c, d, e);

// операто !(не) это префиксный, унитарный оператор

a = !!10; //true
b = !!0; //false
c = !!'abc'; //true
d = !!''; // false - потому что пустая строка ложное значение
e = !!true; //true
f = !!undefined; //false
console.log(a, b, c, d, e);

let x = !!{};
console.log(x);
console.log(typeof {});
console.log(Boolean({}));
