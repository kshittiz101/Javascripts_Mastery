// variable is a container that store value, which can be later manipulate, update or use
//  to perform some action

// varibale can we create using
// 1. var(function scoped)
// 2. let(block scoped)
// 3. const(block scoped)

// var (Function-Scoped, Outdated)
// Scope: Function-scoped (accessible throughout the function).
// Hoisting: Hoisted to the top with an undefined value.
// Reassignment: Can be reassigned.
// Redeclaration: Can be redeclared in the same scope.
// Block Scope: ❌ Not block-scoped (ignores {} blocks).

"use strict";

// creating variable
var firstName = "kshittiz";
console.log(firstName);

// updating variable value
var fistName2 = "Harry Potter";
console.log(fistName2);

// hoisted
// var is hoisted on the top, get initialized with value undefined
console.info("Working on Hoisted Property of var ");
console.log(lastName); // undefined
var lastName = "Chaudhary";
console.log(lastName);

console.log(firstName + " " + lastName);
