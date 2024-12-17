// Strings are the sequence of characters use to 
// represent text. 
// Strings are immutable - meaning it can't be change
// once created

// three ways to declare string 
// '' single quote
// "" double quote 
// `` backticks


// // single quote 
// let firstName = 'Kshittz';
// // "" double quote 
// let lastName = "Chaudhary";
// // `` backticks
// let address =`Nepal`;
// console.log(firstName)
// console.log(lastName)
// console.log(address)


// properties of the string 
let firstName = "kshittiz";
console.log(firstName.length);
console.log(firstName.charAt(2));

// return from 0 to 4, 5th index will be remove or not mention
let newString = firstName.slice(0,5);
console.log(newString);

let address = "KatHmanDU";
console.log(address.toUpperCase())
console.log(address.toLowerCase())

// trim()
// Removes leading and trailing whitespace.
let des = "    amazing     ";
console.log(des.length)
console.log(des.trim().length)



// split(separator)
// Splits a string into an array based on a separator.

let str = "apple, banana, cherry";
let arr = str.split(",");
console.log(arr)


// replace(searchValue, newValue)
// Replaces the first occurrence of a specified value.
let str2 = "i want to be a good developer";
let newStr2 = str2.replace("good","great");
console.log(newStr2)


// replaceAll(searchValue, newValue)
// Replaces all occurrences of a specified value.

let str3 = "apples apples apples";
let newStr3 = str3.replaceAll("apples", "cat");
console.log(newStr3)


//8. includes(substring)
// Checks if a substring exists in the string.
let hello = "hello world";
console.log(hello.includes("world")); // true


// 9. startsWith() and endsWith()
// Checks if the string starts or ends with a specific substring.

let info = "I will be great Web developer";
console.log(info.startsWith("I")); // true
console.log(info.endsWith("developer")); // true


// 10. concat()
// Combines two or more strings.

let username = "Kshittiz";
let lastNmameOfUser = "Chaudhary";

console.log(username.concat(" ", lastNmameOfUser));


// 11. String Interpolation or Template literals
let myFirstName = "Harry";
let myLastName = "potter";

let fullName = `My first name is ${myFirstName} and last name is ${myLastName}`;
console.log(fullName)