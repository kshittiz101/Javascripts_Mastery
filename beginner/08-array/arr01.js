// array in js is the collection of the items of element, it used to store multiple value in single variable

// characteristers of an array in js
// 1. Ordered collection
// 2. Dynamic Sized
// 3. Heterogeneous - can store multiple value in single array
// 4. Mutable - can be change the value of the element after creation
// 5. Object types
// 6. Sparse Arrays: Can have empty slots in array
// 7. Shallow Copy Behavior
// 8. Iterable(for...of) (forEach) and spread operator

// creation of an array
// creating an array using array literals
let arr1 = [10, 20, "kshittiz"];
console.log(arr1);

// create using constructor
let arr2 = new Array(101, 102, 103);
console.table(arr2);

// accesing an element
console.log(arr2[0]); // 101
console.log(arr1[2]); // "kshittiz"

// updating array
arr2[2] = "Harry Potter";
console.log(arr2); // [101, 102, "Harry Potter"]

// total length of the array
console.info(arr2.length); // 3

// an array is an object types
console.log(typeof arr1); // object
