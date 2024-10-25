// all method in js it seem like they are change original string value,
// but in reality they are returing new string

let str = "Hello";
let newStr = str.replace("H", "h"); // Creates a new string
console.log(newStr); // Output: "hello"
console.log(str); // Output: "Hello" (original string remains unchanged)

let str2 = str.toLocaleUpperCase();
console.log(str);
console.log(str2);
