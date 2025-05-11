// Null is a primitive data type in JavaScript representing the intentional absence of a value.
// Key Characteristics
// Definition: A single value, null, indicating no value or an empty reference.
// Type: object (historical quirk; typeof null returns "object").
// Falsy: Evaluates to false in Boolean contexts (e.g., !!null → false).
// Usage: Used to explicitly denote the absence of an object, variable, or property.

let user = null;
console.log(user); // null

console.log(typeof user); //Object

let value = null;
console.log('Value:', value, typeof value); // Value: null object
console.log('Is falsy:', !!value); // false
if (value === null) console.log('Value is null'); // Value is null
