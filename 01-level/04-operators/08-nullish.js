// Nullish Coalescing Operator (??)
let userName = null;
let displayName = userName ?? "Guest";
console.log(displayName); // "Guest"

let userAge = 0;
let finalAge = userAge ?? 18;
console.log(finalAge);
// 0 (Unlike `||`, `??` treats 0 as a valid value)
