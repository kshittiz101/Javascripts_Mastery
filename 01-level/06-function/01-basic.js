// function in js

// A function is a block of code that perform a speciic task. It helps is organizing code and avoiding repetitions. Function can take inputs, procss it and return an output

// syntax to create function
/* 
function functionName(parameters){
        // function body
        return  (optional return body)
}

*/

// function declaration
function sum() {
  let x = 10;
  let y = 20;
  let z = x + y;
  console.log(z);
}
// function calling
sum();

// types of function
// 1.Built-in function
// example: console.log(), window.alert(), console.table()

// 2.user defined function
// 2.1. Function with no parameters and no return types
// 2.2. Function with  parameters and no return types
// 2.3. Function with no parameters and  return types
// 2.4. Function with  parameters and  return types

// 2.1. Function with no parameters and no return types

function message() {
  console.log("Hello from kshittiz");
}
message();

// 2.2. Function with  parameters and no return types
function add(a, b) {
  console.log(a + b);
}

add(20, 30);

// 2.3. Function with no parameters and  return types

function returnTypes() {
  return "My name is kshittiz";
}

let myIntro = returnTypes();
console.log(myIntro);

// 2.4 Function with parameters and return types
function substract(a, b) {
  return a - b;
}

let result = substract(30, 20);
console.log(result);

// Notes:
// A function stops executing once it hits return.
// anythings return after the return keywords the code will not execute

// Default parameters or Optional Parameters
function defParameter(schoolName = "Amar Jyoti") {
  console.log(schoolName);
}

defParameter();
defParameter("Sainika");
