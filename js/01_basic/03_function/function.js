// function in js
// function is a block of reusable code that perform specific task

// declaring a function
function greeting() {
  console.log("good morning");
}
// calling or executing a function
greeting();

// parameterize function
function add(num1, num2) {
  console.log("The sum of two number is:", num1 + num2);
}

add(20, 21);

// return type function
function square(num) {
  return Math.pow(num, 2);
}
console.log(square(5));

// parameter and return
function areaOfRectangle(length, breath) {
  return length * breath;
}

console.log(areaOfRectangle(20, 30));
