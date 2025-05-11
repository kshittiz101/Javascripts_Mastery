// use when the number of iterations in unknown
// syntax
// initialize
// while(condition){}

let i = 0; // counter variable initialization

// conditions of loop execution
while (i < 11) {
  console.log(i);

  // increment and decrement
  i++;
}

// looping in array with while loop
// Use when the number of iterations is unknown.

let arr1 = [20, 25, 65, 35, 55];
let j = 0;

while (j < arr1.length) {
  console.log(`Index ${j}: ${arr1[j]}`);
  j++;
}
