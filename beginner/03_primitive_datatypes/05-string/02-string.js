// 🧩 Substring Extraction
// slice(starting index, end index) end index value is not include
// - Supports negative indexes: You can use negative numbers to count from the end of the string.
// - Order matters: If `start` is greater than `end`, it returns an empty string.
// - Returns a new string: Original string is not modified.
// - Common use: Preferred for its consistency and flexibility.

let text = 'Hello world!';
let result = text.slice(0, 7);
console.log(result); // Hello w

let greaterStart = text.slice(10, 7);
console.log(typeof greaterStart); // string
console.log('This will return empty string:', greaterStart); // ""

// substring()
// - Does not support negative indexes: Negative values are treated as `0`.
// - Swaps start and end if needed: If `start` > `end`, it automatically swaps them.
// - Returns a new string: Original string is not changed.
// - Common use: Historically used for older browser support.

let subStr = 'Javascipts';
console.log(subStr.substring(0, 4)); // Java
console.log(subStr.substring(-0)); // negative index start from zero
console.log(subStr.substring(4, 1)); // Java it will swap start and end index

// Prefer slice() in modern JavaScript for more predictable behavior, especially when working with negative indices.
