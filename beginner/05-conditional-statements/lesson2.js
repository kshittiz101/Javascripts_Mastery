// if else-if else
// Checks multiple conditions in sequence.

let year = 2025;
if (year < 2025) {
  console.log(`Year is below ${year}`);
} else if (year === 2025) {
  console.log("The given year is 2025");
} else {
  console.log("The given year is greater than 2025");
}

// Notes:
// In an if - else if - else structure, only the first matching condition executes, and the rest are ignored.

// How it Works:
// The if condition is checked first.
// If if is true, it executes and the rest (else if, else) are skipped.
// If if is false, it moves to else if. If else if is true, it executes and skips the rest.
// If none of the conditions match, the else block executes.

let age = 18;

if (age >= 18) {
  console.log("You are adult");
} else if (age === 18) {
  console.log("Your are going to be an adult");
} else {
  console.log("You are not an adult");
}
