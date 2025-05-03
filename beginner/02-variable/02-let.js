//let (Modern, Block-Scoped)
// Scope: Block-scoped (accessible only inside {}).
// Hoisting: Hoisted but not initialized (causes error if used before declaration).
// Reassignment: ✅ Can be reassigned.
// Redeclaration: ❌ Cannot be redeclared in the same scope.

let num1 = 23;

// redeclaraion can't be don't in same scope
// let num1 = 45;

if (true) {
  let num1 = 45;
  // this going to be another variable of the  if scope
  console.log("This is a local variable", num1);
}

// this is global scope variable
console.log("This is a local global variable", num1);
