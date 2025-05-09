// BigInt is a special numeric type in JavaScript used to represent integers
// larger than Number.MAX_SAFE_INTEGER (i.e., values beyond 2^53 - 1).

// You create a BigInt by appending n to the end of an integer:
// let big = 1234567890123456789012345678901234567890n;
// BigInt values cannot be mixed with regular Number types in arithmetic operations.

// BigInt() – Converts a number or string to BigInt.
// BigInt("9007199254740995") → 9007199254740995n
// typeof – Used to check if a value is BigInt.
// typeof 10n → "bigint"
// Supports arithmetic operators: + - * / % **
// Example: 10000000000000000000n + 1n → 10000000000000000001n
// Cannot be used with Math methods like Math.sqrt(), Math.random().

let num1 = 12n;
console.log(num1); // 12n
console.log(typeof num1); // bigint

// number to bigint
let num2 = 22;
let num2ToBigInt = BigInt(num2);
console.log(num2ToBigInt);
console.log(typeof num2ToBigInt); // bigint

let str = '33';
let strToBigInt = BigInt(str); // converting string to bigint
console.log(typeof strToBigInt); //bigint
