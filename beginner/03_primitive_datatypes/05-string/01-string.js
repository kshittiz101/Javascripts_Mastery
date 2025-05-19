// in js string representation the squences of characters or unicode characters.
// it is immutable in nature i.e. once it create it can't be change
let firstName = 'Kshittiz';

// we can access characters with index value
let firstLetter = firstName[0];
console.log(firstLetter); // K

let lastCharacter = firstName[firstName.length - 1];
console.log(lastCharacter); // z

// lenght properties
let lengthOffirstName = firstName.length;
console.log(lengthOffirstName); // 8

// Important method in string
let para = 'I want to be a great software engineer';
console.log(para.toUpperCase());
console.log(para.toLowerCase());

// trim() --> remove white spaces from both ends
let para2 = '     I am from nepal            ';
let afterTrim = para2.trim();
console.log(para2.length);
console.log(afterTrim.length);

// replace(word want ) --> replace first match for the string
//string.replace(searchValue, newValue)
let des = 'I have quite experience in IT industry ';
console.log(des.replace('quite', '1 years of'));

// replaceAll --> remove all matched strings
let text = 'I love cats. Cats are very easy to love. Cats are very popular.';
text = text.replaceAll('Cats', 'Dogs');
text = text.replaceAll('cats', 'dogs');
console.log(text);

// search
//search() searches a string for a value and returns the index of the first match
let text1 = 'Mr. Blue has a blue house';
let position = text1.search('Blue');
console.log(position);
