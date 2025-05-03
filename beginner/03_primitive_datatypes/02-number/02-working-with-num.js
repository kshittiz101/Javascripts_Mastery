// working with numbers
// a. Arithmetic Operations

let a = 10;
let b = 30;
console.log(a + b); // 40
console.log(a - b); // -20
console.log(a * b); // 300
console.log(a / b); // 0.3333333333333
console.log(a % b); // 10
console.log(a ** b); //1e+30

//  Parsing number
let str = "42";
let num = parseInt(str);
console.log(typeof num);
console.log(num);

let floatStr = "3.14";
let floatNum = parseFloat(floatStr);
console.log(typeof floatNum);
console.log(floatNum);

// checking for number
console.log(isNaN(10 / "hi"));
