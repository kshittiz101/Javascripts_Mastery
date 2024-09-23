// JavaScript Primitive Types Example

// 1. String
// Represents a sequence of characters.
let greeting = "Hello, World!";
console.log(greeting);
// Output: Hello, World!
console.log(typeof greeting);
// Output: string

// 2. Number
// Represents both integer and floating-point numbers.
let age = 30;
let price = 19.99;
console.log(age, price);
// Output: 30 19.99
console.log(typeof age, typeof price);
// Output: number number

// 3. BigInt
// Used for integers with arbitrary precision.
let bigNumber = 9007199254740991n;
console.log(bigNumber);
// Output: 9007199254740991n
console.log(typeof bigNumber);
// Output: bigint

// 4. Boolean
// Represents a logical entity: true or false.
let isJavaScriptFun = true;
let isRainy = false;
console.log(isJavaScriptFun, isRainy);
// Output: true false
console.log(typeof isJavaScriptFun, typeof isRainy);
// Output: boolean boolean

// 5. Undefined
// A variable declared but not assigned a value.
let notAssigned;
console.log(notAssigned);
// Output: undefined
console.log(typeof notAssigned);
// Output: undefined

// 6. Symbol
// Unique and immutable identifiers, often used as object keys.
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);
// Output: false
console.log(typeof sym1, typeof sym2);
// Output: symbol symbol

// 7. Null
// Represents the intentional absence of any object value.
let emptyValue = null;
console.log(emptyValue);
// Output: null
console.log(typeof emptyValue);
// Output: object (a known JavaScript peculiarity)

// Summary of Primitive Types
console.log("\n--- Summary ---");
console.log(`String: "${greeting}" (typeof: ${typeof greeting})`);
console.log(
  `Number: ${age}, ${price} (typeof: ${typeof age}, ${typeof price})`
);
console.log(`BigInt: ${bigNumber} (typeof: ${typeof bigNumber})`);
console.log(
  `Boolean: ${isJavaScriptFun}, ${isRainy} (typeof: ${typeof isJavaScriptFun}, ${typeof isRainy})`
);
console.log(`Undefined: ${notAssigned} (typeof: ${typeof notAssigned})`);
console.log(
  `Symbol: ${sym1.toString()}, ${sym2.toString()} (typeof: ${typeof sym1}, ${typeof sym2})`
);
console.log(`Null: ${emptyValue} (typeof: ${typeof emptyValue})`);
