// опертор ... разделения объект на свойства

const button = {
  width: 200,
  text: 'buy',
};

const redButton = {
  ...button,
  color: 'red',
};

console.table(redButton);

const secondButton = {
  weight: 120,
  sound: 'melodic',
};

const modifiedButton = {
  ...redButton,
  ...secondButton,
};

console.table(modifiedButton);
