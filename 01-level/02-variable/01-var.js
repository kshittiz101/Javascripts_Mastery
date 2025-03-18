// variable is a container that store value, which can be later manipulate, update or use to perform some action
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

// creating variable
var firstName = "kshittiz";
console.log(firstName);

// updating variable value
firstName = "Harry Potter";
console.log(firstName);
