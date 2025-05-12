// the forEach loop is js is used to iterate over elements in an array
// it executes a provided function once for each array element

// syntax:
// array.forEach(function(element, index, array){});

let fruits = ['apple', 'banana', 'grapes', 'mango'];

function displayItem(fruit) {
  console.log(fruit);
}

// fruits.forEach(displayItem);

// using anonymous function
// fruits.forEach(function (fruit) {
//   displayItem(fruit);
// });

fruits.forEach(function (fruit) {
  console.log(fruit);
});
