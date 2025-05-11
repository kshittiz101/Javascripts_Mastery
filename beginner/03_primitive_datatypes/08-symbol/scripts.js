// symbol is primitive datatypes in js, introduce in es6, used  to create unique
// and immutable identifiers for object

const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // this will print false

const user = {
  [sym1]: 1234,
};

console.log(user[sym1]);
