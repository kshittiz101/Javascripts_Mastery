// if statement

let num = 5;
if (num > 2) {
  console.log(`${num} is greater`);
}

// if else statement
let x = 10;
if (x > 20) {
  console.log("greater");
} else {
  console.log("Smaller");
}

// if else if else statement
let num2 = 10;
if (num2 > 20) {
  console.log("greater");
} else if (num2 == 10) {
  console.log("Equal");
} else {
  console.log("Smaller");
}

// switch statement

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("It is banana");
    break;

  case "grapes":
    console.log("It is grapes");
    break;

  case "apple":
    console.log("It is apple");
    break;

  default:
    console.log("It is not a fruits");
    break;
}

// use cases of if statement and switch statement
// Key Points:
// Use if, else if, and else for more flexible conditions.
// Use switch for multiple potential values of a single expression.
