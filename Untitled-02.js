const objectA = { a: 10, b: true };
console.log(objectA);
objectA.a = 20;
console.log(objectA);
const copyOfA = objectA;
copyOfA.c = 'white';
console.log(copyOfA);

function a() {
  console.log('hey there');
}
a();
a = 10;
a();
