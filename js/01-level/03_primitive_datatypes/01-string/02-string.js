// String Immutability
// Strings cannot be changed, but you can reassign them:

// In JavaScript, strings are immutable, meaning you cannot change the individual characters of a string directly. 
// If you need to modify a string, you must create a new string instead.
let str = "Good Morning";
str[0] = "H"; // Does nothing
console.log(str); // Good Morning

str = "hello"; // Reassignment
console.log(str); // hello

