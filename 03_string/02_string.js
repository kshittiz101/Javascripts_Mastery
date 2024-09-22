// commonly used method and properties
// charAt(), indexOf(), slice(startIndex, endIndex),
// toUpperCase() , toLowerCase()
// replace(nevalue, replaceValue)
// split() --> split string into array

const prolang = "JavaScripts";
console.log(prolang.charAt(10));
console.log(prolang.indexOf("a"));
console.log(prolang.indexOf("Java"));
console.log(prolang.slice(0, 4));
console.log(prolang.toUpperCase());
console.log(prolang.toLowerCase());

// replace
const changeLang = prolang.replace("Java", "Type");
console.log(changeLang);

// split method
const languages = "Harry, James, Messi, Neymar";
let langArr = languages.split(","); // Splits the string into an array at each comma
console.log(langArr); // Output: ["Harry", " James", " Messi", " Neymar"]
console.log(typeof langArr); // Output: "object" (since arrays are of type object in JavaScript)
