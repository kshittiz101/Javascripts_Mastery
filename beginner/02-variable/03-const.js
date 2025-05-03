// const (Constant, Block-Scoped)
// Scope: Block-scoped (same as let).
// Hoisting: Hoisted but not initialized.
// Reassignment: ❌ Cannot be reassigned.
// Redeclaration: ❌ Cannot be redeclared.
// Immutable Reference: The variable cannot be changed, but objects and arrays can be modified.

// console.log(PI);
//ReferenceError: Cannot access 'PI' before initialization
const PI = 3.14;
if (true) {
  // this allow because it is a blocked scoped
  const PI = 3.14;
  console.log(PI);
}

console.log(PI);
