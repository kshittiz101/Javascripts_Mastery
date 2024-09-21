let arr1 = [10, 20, 30, 40];

// Add 22 to the array
// 1 - push(...items):
//     Adds one or more elements to the end of an
//     array and returns the new length of the array.

arr1.push(22);

arr1.push(25, 35);
console.log(arr1.length);
// Loop through the array and log the index
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 2 -  pop():
//     Removes the last element from an array
//     and returns that element.
console.log("Remove element:", arr1.pop());

// 3. - shift():
//     Removes the first element from an array and
//     returns that element.

console.log(
  "shift remove element from first index and return that remove value: ",
  arr1.shift()
);

// 4 - unshift(...items):
//     Adds one or more elements to the beginning
//     of an array and returns the new length of the array

let arr2 = [20, 35, 25, 45];
console.log("before shift");
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

arr2.unshift(65, 75);
console.log("After unshift");
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
