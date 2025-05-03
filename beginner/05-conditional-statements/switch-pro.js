// In a switch statement, if multiple cases match, only the first matching case executes—unless you omit the break statement, in which case fall-through occurs, executing subsequent cases until a break is found.
//Example 1: Only the First Match Executes

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  case "apple": // Duplicate case (ignored)
    console.log("This won't run");
    break;
  default:
    console.log("Unknown fruit");
}

// 👉 The first matching case ("apple") executes, and the break prevents further execution.
// 👉 The second "apple" case is ignored because case values must be unique.

// Example 2: Fall-Through Without break
let num = 10;

switch (num) {
  case 10:
    console.log("Number is 10");
  case 20:
    console.log("Number is 20");
  case 30:
    console.log("Number is 30");
    break;
  default:
    console.log("Number is unknown");
}

// 👉 Since there are no break statements, execution falls through and runs the next cases until it reaches a break.
