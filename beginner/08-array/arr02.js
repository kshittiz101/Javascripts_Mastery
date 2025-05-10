// adding and removing methods

// adding element in array
// push(...items) --> add one or more elements at the end of the array
let arr1 = [10, 20, 35];
arr1.push(4, 5);
console.log(arr1);

// unshift(...items) --> adds one or more element at the beginning of the array
let arr2 = [30, 50, 55];
arr2.unshift(22, 11);
console.log(arr2);

// splice(start, deleteCount, ...items)
let arr3 = [55, 65, 66, 69];
arr3.splice(1, 0, 88, 89); // it add elements from index start from 1 and deleter  count is zero i.e no element is deleted
console.log(arr3);

let arr4 = [53, 33, 65, 66];
arr4.splice(2, 2, 90, 87);

// here from index 2 to 2 index from get deleted and items get inserted

console.log(arr4);

// direct assignment
// Direct Assignment: Add elements by assigning to an index (can create sparse arrays if index is beyond length).
let arr5 = [10, 55, 25];
arr5[3] = 57;
console.log(arr5);

arr5[10] = 40;
console.log(arr5); // [ 10, 55, 25, 57, <6 empty items>, 40 ]
