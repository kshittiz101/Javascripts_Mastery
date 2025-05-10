// Search and Matching

// include(substring) -- Checks if substring exists
let text = 'I am a great programmer';
console.log(text.includes('am')); // true

// startsWith(substring) -- Checks if string starts with substring
console.log(text.startsWith('I')); // true

// endsWith(substring) --> Checks if string ends with substring
console.log(text.endsWith('r')); // true

// indexOf(substring) -- first index of substring or -1
console.log(text.indexOf('am')); // 2
