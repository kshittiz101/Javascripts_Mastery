// local and global scope
// 1.Global Scope

//? - Definition**:
// Variables or functions declared in the global scope are accessible throughout
//  the entire program. They are usually defined outside any function or block.
// - Access:
// Globally scoped variables can be accessed and modified from any part of the code.
// - Lifetime:
// Global variables persist for the duration of the program's execution.

let globalVariable = "I am Global Variable";

function myFunc() {
  console.log(globalVariable);
}
myFunc();
console.log(globalVariable);

// local scope
function myFunction() {
  let localVariable = "I am local variable";
  console.log(localVariable);
}

myFunction();
// console.log(localVariable); // can not access here
// it thought variable is not defined error4

// function scope vs Block scope
// in js var -- perform function scope
function myFun() {
  var message = "hello from top";
  if (true) {
    functionScope = "hello from if statement ";
  }
  console.log(functionScope);
}

myFun();
// console.log(message);
// this can't be get because it is in function scope
//and can't get outside the function scope

// Block scoped
// Definition: Block-scoped variables are accessible only within the block
// (denoted by curly braces {}) in which they are declared.
// A block can be an if, for, while loop, or any other curly-brace-delimited block.

function exampleBlockScope() {
  if (true) {
    let blockScoped = "I'm visible only inside this block!";
    console.log(blockScoped); // Accessible here
  }
  //   console.log(blockScoped); // Error: blockScoped is not defined outside the block
}

exampleBlockScope();
