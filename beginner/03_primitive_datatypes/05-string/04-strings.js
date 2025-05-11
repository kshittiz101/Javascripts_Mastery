// ✂️ Splitting
//  🔹 `split()` (Used on Strings)
// - Purpose: Splits a string into an array of substrings using a separator.
// - Original string is not changed (strings are immutable).
// - Returns: A new array of strings.

const text = 'apple,banana,grape';
const result = text.split(',');
console.log(result); // ["apple", "banana", "grape"]

// `splice()` (Used on Arrays)
// - Purpose: Changes an array by adding/removing elements at specific positions.
// - Mutates the original array.
// - Returns: An array of the removed elements.
// syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...);

const fruits = ['apple', 'banana', 'grape'];
const removed = fruits.splice(1, 1, 'orange');
console.log(fruits); // ["apple", "orange", "grape"]
console.log(removed); // ["banana"]
