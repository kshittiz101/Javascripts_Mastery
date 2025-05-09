// some usefull method in  number
// to convert into numer

let strNum = '223';
let num = Number(strNum);
console.log(typeof strNum); // str
console.log(typeof num); // number

// parseInt(string)
// Parses a string and returns an integer.
let str2 = '12';
let str2Num = parseInt(str2);
console.log(typeof str2Num); // number

//parseFloat(string)
// Parses a string and returns a floating-point number.
// → parseFloat("3.14abc") → 3.14

let str3 = '3.14';
console.log(typeof str3);
let str3Num = parseFloat(str3);
console.log(str3Num);
console.log(typeof str3Num);

// toFixed(digits)
// Returns a string with the number rounded to digits decimal places.
// → (3.14159).toFixed(2) → "3.14"

let str4 = '3.145566666';
let str4Num = parseFloat(str4).toFixed(2);
console.log(str4Num);

// toString(base)
// Converts a number to a string. Optionally, convert to a base (binary, hex, etc.).
// → (255).toString(16) → "ff"

let num2 = 255;

console.log(num2.toString()); // "255" (default base 10)
console.log(num2.toString(2)); // "11111111" (binary)
console.log(num2.toString(16)); // "ff" (hexadecimal)
console.log(num2.toString(8)); // "377" (octal)

// isNaN(value)
// Checks if the value is NaN after type coercion.
// → isNaN("abc") → true

console.log(isNaN('abc')); // true → "abc" can't convert to a number
console.log(isNaN(123)); // false → 123 is a valid number
console.log(isNaN('123')); // false → "123" is coerced to 123
console.log(isNaN(undefined)); // true → can't convert to number
