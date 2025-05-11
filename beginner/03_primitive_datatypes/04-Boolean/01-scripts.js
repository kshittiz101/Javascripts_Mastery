// The Boolean type represents a logical entity and can have only two values: true or false.
let isLoggined = true;
console.log(isLoggined);

let a = Boolean(1);
let b = Boolean(0);
console.log(a); // true
console.log(b); // false
console.log(Boolean(NaN)); //false
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Falsy Values in JavaScript
// false (Boolean primitive)
// 0 (Number, integer zero)
// -0 (Number, negative zero)
// 0n (BigInt, zero)
// "" (String, empty string)
// null (Primitive, absence of value)
// undefined (Primitive, uninitialized or absent value)
// NaN (Number, Not-a-Number)
