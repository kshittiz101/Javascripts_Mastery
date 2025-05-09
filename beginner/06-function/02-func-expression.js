// Function Expressions
// A function expression is a function that is assigned to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be used before they are defined.

/* 
const functionName = function(parameters) {
    // Function body
    return value; // Optional
};
*/

const sum = function (a, b) {
  console.log(a + b);
};

sum(20, 85);
