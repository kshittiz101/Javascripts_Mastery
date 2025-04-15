// nullish Coalescing Operators (??)
// it is a logical operator, introduce in Es2020
// Returns the right hand operand only if the left hand operand in null or undefined
// syntax:
// leftOperand ?? rightOperand

console.log(null ?? "default");
// 'default'
// output will be default beacuse left hand operand in null

console.log(undefined ?? "fallback");
// 'fallback'
// output it will show fallback beacuse left hand operand in undefined

console.log(0 ?? 24);
// 0
// output will be 0 because the value of left hand operand in not null or undefined

console.log(false ?? true);
// false

// logical OR (||) operator
// this operator skips falsy values
// some falsy values
// false, 0 (zero), -0 (neg Zero), 0n (BigInt Zero), "" (Empty string), null , undefined, NaN (Not a Number)

console.log(0 || "42");
// output: '42'
// beacuse left oprand in falsy values
console.log(-0 || "hello");
// output: 'hello'

console.log(null || "somthing is here");

console.log("with data" || "no data");
// with data will output becasue it is not a falsy value
