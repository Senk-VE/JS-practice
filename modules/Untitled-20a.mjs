const sum = (a, b) => a + b;

const one = 1;
const two = 'two';

const mult = (a, b) => a * b;

// export default sum; когда добавился вызов двух функий, то вместо 'default' используем переменные в {}
export { one, two };
export { sum, mult };
