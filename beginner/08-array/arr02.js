// array built in methods
// addding and removing method in array

let arr1 = [10, 20, 30, 50, 80];
console.log(arr1.length);

// push() adds elements to the end, returns new length
arr1.push(20);
console.log(arr1); // [10,20,30,50,80,20]

// pop() remove element from end i.e right side fo the array
let arr2 = [22, 33, 44];
arr2.pop();
console.log(arr2); // [22,33]

// unshift() -- adds elements at the starting of an array
let arr3 = [20, 35, 65];
arr3.unshift(85);
console.log(arr3); // [85,20,35,65]

// shift() -- remove elements from start of and array
let arr4 = [55, 65, 85, 89];
arr4.shift();
console.log(arr4); // [65,85,89]
