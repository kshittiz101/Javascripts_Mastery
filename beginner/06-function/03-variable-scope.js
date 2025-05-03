// variable scope
// is the context where the variable can be accessible at program

// types of Variable scope
// 1. Global Scope
// 2. Local Scope

// 1. Global Scope
// This variable can be accessible at any part of the program
// Declaring a global Variable
let globalVariable = "Hello";
function message(name) {
  // here parameter name is treated as local variable
  console.log(`${globalVariable}, ${name}`);
}

function showValue() {
  console.log(`${globalVariable}`);
}
message("Kshittiz");
showValue();

// 2. Local Variable
// variable that can be accessible in the declare block

function add() {
  // local vairable
  let a = 20;
  let b = 30;
  console.log("Sum of A+B is:", a + b);
}
// local varibale can't be accessible here, it will throught a referenceError
// console.log(a);

add();
