// arrow function
// arrow function is the conside way to write function in js

// traditional ways
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("kshittiz", "Chaudhary");

// arrow functon
let fullNameInArrow = (firstName, lastName) => firstName + " " + lastName;
console.log(fullNameInArrow("Ram", "Thapa"));

// appliction of arrow function
// 1. use for shorter syntax
// 2. Array method like map, filter and reduce
// 3. Event listeners when this is not needed
//4. Promises and Aysc and await
//5. Reducing Boilerplate  in object
// 6. Function Programming
