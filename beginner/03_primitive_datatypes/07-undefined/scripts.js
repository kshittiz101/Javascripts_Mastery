// Undefined is a primitive data type in JavaScript representing a variable or property that
//  has not been assigned a value or is not initialized.

// Key Characteristics
// Definition: A single value, undefined, indicating the absence of a defined value.
// Type: undefined (typeof undefined → "undefined").
// Falsy: Evaluates to false in Boolean contexts (e.g., !!undefined → false).
// Usage: Automatically assigned to uninitialized variables, missing function return values,
// or non-existent object properties.

let value;
console.log(value); // undefiend
console.log(typeof value); // undefiend

// undefined is falsy value
function getValue() {} // this function without any return value will be undefined
console.log(getValue());
