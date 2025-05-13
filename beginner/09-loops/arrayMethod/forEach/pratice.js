// Use forEach to print each number
// let numbers = [1, 2, 3, 4, 5];

// // console.log(numbers);
// numbers.forEach(function (num) {
//   console.log(num);
// });

// Print only even numbers:
let nummbers = [10, 15, 20, 25, 30];

// function evenNumber(num){
//   if num % 2 ===0
// }

nummbers.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// Use forEach to print each fruit in uppercase
let fruits = ['apple', 'banana', 'grapes'];

fruits.forEach(function (fruit) {
  console.log(fruit.toUpperCase());
});

// Output: Hello Ram, Hello Sita, Hello Hari
let names = ['Ram', 'Sita', 'Hari'];
names.forEach(function (name) {
  console.log(`Hello ${name}`);
});

// Use forEach to find the sum
let values = [5, 10, 15];
let sum = 0;
values.forEach(function (value) {
  sum = sum + value;
});

console.log(sum);

// Output: 0: pen, 1: pencil, 2: eraser
// let items = ['pen', 'pencil', 'eraser'];
// let index = 0;

// items.forEach(function (item) {
//   console.log(`${index}: ${item}`);
//   index++;
// });

let items = ['pen', 'pencil', 'eraser'];

items.forEach(function (item, index) {
  console.log(`${index}: ${item}`);
});
