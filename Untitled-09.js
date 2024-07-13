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

console.log(Boolean({})); // пустой объект это true

a1 = true && true; // t && t вернёт true
a2 = true && false; // t && f вернёт false
a3 = false && true; // f && t вернёт false
a4 = false && 3 == 4; // f && f вернёт false
a5 = 'Cat' && 'Dog'; // t && t вернёт "Dog"
a6 = false && 'Cat'; // f && t вернёт false
a7 = 'Cat' && false; // t && f вернёт false
a8 = '' && false; // f && f вернёт ""
a9 = false && ''; // f && f вернёт false

o1 = true || true; // t || t вернёт true
o2 = false || true; // f || t вернёт true
o3 = true || false; // t || f вернёт true
o4 = false || 3 == 4; // f || f вернёт false
o5 = 'Cat' || 'Dog'; // t || t вернёт "Cat"
o6 = false || 'Cat'; // f || t вернёт "Cat"
o7 = 'Cat' || false; // t || f вернёт "Cat"
o8 = '' || false; // f || f вернёт false
o9 = false || ''; // f || f вернёт ""
o10 = false || varObject; // f || object вернёт varObject

let s = 10;
s && console.log('executed');
