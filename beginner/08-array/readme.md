Comprehensive JavaScript Array Notes
What is an Array?

A JavaScript array is an ordered, zero-indexed collection of elements used to store multiple values in a single variable.
Arrays are dynamic, mutable, and can hold mixed data types (e.g., numbers, strings, objects).
Arrays are objects in JavaScript, inheriting from Array.prototype, with special behavior for numeric indices and the length property.
Declared using square brackets [] or the Array constructor.

Creation Examples
// Literal notation (preferred)
let arr = [1, "text", { key: "value" }];

// Array constructor
let arr2 = new Array(3); // [undefined, undefined, undefined]
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

Characteristics of Arrays

Ordered Collection: Elements are stored in a specific order, accessed via zero-based indices.
Dynamic Size: Arrays can grow or shrink automatically as elements are added or removed.
Heterogeneous: Can store different data types in the same array (e.g., [1, "hello", {}]).
Mutable: Elements can be changed, added, or removed after creation.
Object Type: Arrays are objects, with numeric keys and additional methods from Array.prototype.
Auto-updating Length: The length property reflects the number of elements and updates dynamically.
Sparse Arrays: Can have "empty" slots (e.g., new Array(3) creates an array with undefined elements).
Rich Methods: Supports a variety of built-in methods for manipulation, iteration, and transformation.
Shallow Copy Behavior: Methods like slice or spread (...) create shallow copies, referencing nested objects.
Iterable: Compatible with iteration protocols like for...of, forEach, and spread operator.

Array Methods
Adding/Removing Elements

push(...items): Adds elements to the end, returns new length.
pop(): Removes and returns the last element.
unshift(...items): Adds elements to the start, returns new length.
shift(): Removes and returns the first element.

let fruits = ["apple", "banana"];
fruits.push("orange"); // ["apple", "banana", "orange"]
fruits.pop(); // Returns "orange", array: ["apple", "banana"]
fruits.unshift("kiwi"); // ["kiwi", "apple", "banana"]
fruits.shift(); // Returns "kiwi", array: ["apple", "banana"]

Iteration Methods

forEach(callback): Executes a callback for each element.
map(callback): Creates a new array with results of calling callback on each element.
filter(callback): Creates a new array with elements that pass the callback test.
reduce(callback, initialValue): Reduces array to a single value by applying callback.

let nums = [1, 2, 3];
nums.forEach(n => console.log(n)); // Logs 1, 2, 3
let doubled = nums.map(n => n \* 2); // [2, 4, 6]
let evens = nums.filter(n => n % 2 === 0); // [2]
let sum = nums.reduce((acc, n) => acc + n, 0); // 6

Searching and Sorting

find(callback): Returns the first element that satisfies the callback.
indexOf(item): Returns the first index of an item, or -1 if not found.
includes(item): Returns true if the array contains the item.
sort([compareFunction]): Sorts the array in place (modifies original).
reverse(): Reverses the array in place.

let arr = [10, 20, 30];
console.log(arr.find(n => n > 15)); // 20
console.log(arr.indexOf(20)); // 1
console.log(arr.includes(30)); // true
arr.sort((a, b) => a - b); // [10, 20, 30]
arr.reverse(); // [30, 20, 10]

Slicing and Splicing

slice(start, end): Returns a shallow copy of a portion of the array.
splice(start, deleteCount, ...items): Removes/adds elements, modifying the array.

let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
arr.splice(1, 2, 5, 6); // Returns [2, 3], arr: [1, 5, 6, 4]

Joining and Concatenation

join(separator): Joins all elements into a string with a separator.
concat(...arrays): Merges arrays into a new array.

let arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"
let newArr = arr.concat([1, 2]); // ["a", "b", "c", 1, 2]

Other Useful Methods

every(callback): Returns true if all elements pass the callback test.
some(callback): Returns true if at least one element passes the callback test.
flat(depth): Flattens nested arrays to the specified depth.
fill(value, start, end): Fills array with a value from start to end.

let nums = [1, 2, 3];
console.log(nums.every(n => n > 0)); // true
console.log(nums.some(n => n > 2)); // true
let nested = [1, [2, 3]];
console.log(nested.flat()); // [1, 2, 3]
nums.fill(0, 1, 3); // [1, 0, 0]

Additional Features
Spread Operator

Expands array elements for copying or merging.

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
let copy = [...arr1]; // Shallow copy

Destructuring

Extracts elements into variables.

let [first, second] = [1, 2, 3]; // first = 1, second = 2

Multi-dimensional Arrays

Arrays can contain other arrays.

let matrix = [[1, 2], [3, 4]];
console.log(matrix[0][1]); // 2

Best Practices

Use literal notation [] instead of new Array() for simplicity.
Prefer const for array declarations to prevent reassignment (methods still work).
Use spread operator (...) for safe copying to avoid unintended mutations.
Choose the right method for the task (e.g., map for transformation, filter for selection).
Handle edge cases (e.g., empty arrays, invalid indices) to avoid errors.

Common Pitfalls

Mutating methods (splice, sort, etc.) modify the original array.
Sparse arrays may cause unexpected behavior in loops or methods.
forEach cannot be broken early (use for...of or some instead).
Shallow copying means nested objects are referenced, not duplicated.
