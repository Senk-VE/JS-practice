// Условные инструкции. инструкция if
// if (условие) {
//блок кода, выполняемый однократно, если условие правдиво
// }

let val = 10;
if (val > 5) {
  val += 20;
}
console.log(val); // 30

let person = {
  age: 20,
};
if (person.age > 18) {
  console.log('person is adult'); // person is adult
}
if (!person.name) {
  console.log('name not found'); //name not found
}

// //Инструкция if...else
// if (условие) {
//     блок кода, выполняемый однократно, если условие правдиво
// } else {
//     блок кода, выполняемый однократно, если условие ложно
// }

let love = 10;
if (love < 5) {
  love += 20;
} else {
  love -= 20;
}
console.log(love); // -10

// //Инструкция if...else if ... else
// if (условие 1) {//выполняется если условие 1 правдиво
// } else if { (условие 2) //выполняется если условие 1 правдиво
// }  else {
//     //блок кода выполяется, если предыдущие условия ложны
// }

const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the arguments is not a number';
  }
  if (a <= 0 || b <= 0) {
    return 'numbers are not positive';
  }
  return a + b;
};
console.log(sumPositiveNumbers('a', true)); //One of the arguments is not a number
console.log(sumPositiveNumbers(-10, 5)); // numbers are not positive
console.log(sumPositiveNumbers(3, 8)); // 11

// // Инструкция switch. альтернатива инструкции if else if
// switch (выражение) {
//   case A:
//     // действие если Выражение === A
//     break;
//   case B:
//     // Действие если Выражение === B
//     break;
//   default:
//   // Действие по умолчанию
// }

const month = 2; // Это не зимний месяц

switch (month) {
  case 12:
    console.log('декабрь');
    break; // это инструкция
  case 1:
    console.log('Январь');
    break;
  default:
    console.log('Это не зимний месяц');
}
