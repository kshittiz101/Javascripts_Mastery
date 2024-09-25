// ways to declare function in js
// 1. function declaration
function greeting() {
  console.log("This is function declaration");
}

greeting();

// 2. Function expression
// A function can be assigned to a variable. This is called a function expression.
let add = function (a, b) {
  console.log(a + b);
};

add(20, 32);

// 3. arrow function
// Introduced in ES6, arrow functions provide a more concise syntax.
// Arrow functions are often anonymous and have no this context.

const msg = (name) => {
  console.log(`I am ${name} and going to be a great developer soon`);
};
let name = "kshittiz";
msg(name);
