//  parameters and Arguments

// 01. Parameters (Placeholders)
// Defined in function declarations.
// Act as variables inside the function.
// Hold values passed when calling the function.

function message(name) {
  // here name is a name is parameter
  console.log("Good Morning", name);
}

// 02. Arguments
// Arguments  are the Actual Values
// Passed to a function when calling it.
// Replace parameters inside the function.

message("Amar");
// here Amar is an argument

// optional or Default Parameter
function sum(a, b, operationName = "sum") {
  console.log("OperationName is :", operationName);
  console.log("Sum of two number is :", a + b);
}

sum(20, 50);
sum(10, 40, "addition");

// notes
// Default parameters allow functions to have optional values.
// If an argument is not provided, the default value is used.
// If an argument is provided, it overrides the default value.
