// loop is used to execute a block of code again and again to perform specific task
// for loop

// for (initialization; condition; increment/decrement) {
//     // Code to execute
//   }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. while Loop
// The while loop executes a block of code as long as the specified condition is true.
// while (condition) {
//     // Code to execute
//   }

let num = 5;
while (num < 10) {
  console.log(num);
  num++;
}

// do-while
// The do...while loop executes the code block once before checking the condition.
// It continues to execute as long as the condition is true.

let y = 0;

do {
  console.log(y);
  y++;
} while (y < 2);

// 4. for...in Loop
// The for...in loop is used to iterate over the properties (keys) of an object.
const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 5. for...of Loop
// The for...of loop is used to iterate over the values of an iterable object like arrays,
// strings, maps, or sets.

let arr1 = [10, 20, 30, 40, 50];
for (num of arr1) {
  console.log(num);
}
