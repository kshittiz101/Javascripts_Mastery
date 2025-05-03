// Initial arrays
let arr1 = [10, 20, 30, 50];
let arr2 = [25, 55, 65];
let arr3 = [12, 23, 25];
let arr4 = [22, 23, 5];

// Using push() without spread operator
arr1.push(20, 50, 66); // Adds elements individually
arr1.push(arr2); // Adds arr2 as a nested array
console.log("arr1 with nested array:", arr1);

// Using push() with spread operator
arr3.push(...arr4); // Adds arr4 elements individually
console.log("arr3 with spread operator:", arr3);

// output
// arr1 with nested array: [10, 20, 30, 50, 20, 50, 66, [25, 55, 65]]
// arr3 with spread operator: [12, 23, 25, 22, 23, 5]
