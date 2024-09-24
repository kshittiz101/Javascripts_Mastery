// hoisting in js
//  hoisting perform differently in var, let and const variable

// 1. hoisting in var
// console.log(x); // undefined
// var x = 20;
// console.log(x); // 20

// when we create variable with var it look like
// var x;
// console.log(x);

// x = 20;
// console.log(x);

// 2. Hoisting in let
// console.log(y);  // Cannot access 'y' before initialization
let y = 20;
console.log(y);

// 3. Hoisting in const
// console.log(num);  //Cannot access 'num' before initialization
const num = 40;
console.log(num);
