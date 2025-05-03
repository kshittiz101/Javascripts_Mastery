// Array built-in Methods
let arr1 = [10, 20, 30, 50];
// array length
console.log(arr1.length); // 4

// last index value
console.log(arr1[arr1.length - 1]); // 50

// push() adds elements to the end, returns new length

arr1.push(20, 50, 66);

let arr3 = [25, 55, 65];
arr1.push(arr3);
console.log(arr1);

let arr4 = [12, 23, 25];
let arr5 = [22, 23, 5];

// use spread operator when you want to push element individually in array
arr4.push(...arr5);
console.log(arr4);
