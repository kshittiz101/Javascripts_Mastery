# String In Javascipts
In JavaScript, **strings** are sequences of characters used to represent text. Strings are immutable, meaning their contents cannot be changed once created. However, you can reassign variables holding strings.

---

## **Creating Strings**
There are three main ways to declare a string:

### 1. **Using Single Quotes (`'`)**
```javascript
let str1 = 'Hello World';
```

### 2. **Using Double Quotes (`"`)**
```javascript
let str2 = "Hello World";
```

### 3. **Using Backticks (Template Literals - \`\`)**
- Backticks allow **string interpolation** (inserting variables) and **multi-line strings**.
```javascript
let name = "John";
let str3 = `Hello, ${name}`; // String interpolation
console.log(str3); // Output: Hello, John
```

---

## **String Properties**
### 1. **`length`**
- Returns the number of characters in the string.
```javascript
let str = "Hello";
console.log(str.length); // 5
```

---

## **String Methods**
Strings have many built-in methods to manipulate or interact with them. Here are commonly used ones:

### 1. **`charAt(index)`**
Returns the character at a specific index.
```javascript
let str = "Hello";
console.log(str.charAt(1)); // e
```

### 2. **`slice(start, end)`**
Extracts a section of the string and returns it as a new string.
```javascript
let str = "Hello World";
console.log(str.slice(0, 5)); // Hello
```

### 3. **`toUpperCase()` and `toLowerCase()`**
Converts a string to uppercase or lowercase.
```javascript
let str = "Hello";
console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello
```

### 4. **`trim()`**
Removes leading and trailing whitespace.
```javascript
let str = "   Hello   ";
console.log(str.trim()); // "Hello"
```

### 5. **`split(separator)`**
Splits a string into an array based on a separator.
```javascript
let str = "apple,banana,cherry";
let arr = str.split(",");
console.log(arr); // ["apple", "banana", "cherry"]
```

### 6. **`replace(searchValue, newValue)`**
Replaces the first occurrence of a specified value.
```javascript
let str = "I like apples";
let newStr = str.replace("apples", "bananas");
console.log(newStr); // I like bananas
```

### 7. **`replaceAll(searchValue, newValue)`**
Replaces all occurrences of a specified value.
```javascript
let str = "apples apples apples";
let newStr = str.replaceAll("apples", "bananas");
console.log(newStr); // bananas bananas bananas
```

### 8. **`includes(substring)`**
Checks if a substring exists in the string.
```javascript
let str = "Hello World";
console.log(str.includes("World")); // true
```

### 9. **`startsWith()` and `endsWith()`**
Checks if the string starts or ends with a specific substring.
```javascript
let str = "Hello World";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World"));   // true
```

### 10. **`concat()`**
Combines two or more strings.
```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
```

---

## **String Interpolation (Template Literals)**
- Template literals allow you to embed expressions within strings.
- Use **`${}`** for interpolation.

```javascript
let name = "Alice";
let age = 25;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.
```

---

## **Escape Characters**
You can use escape sequences to include special characters in strings:
| Escape Sequence | Description     |
|-----------------|-----------------|
| `\'`           | Single quote     |
| `\"`           | Double quote     |
| `\\`           | Backslash        |
| `\n`           | New line         |
| `\t`           | Tab space        |

**Example:**
```javascript
let str = 'It\'s a beautiful day.\nLet\'s code!';
console.log(str);
// Output:
// It's a beautiful day.
// Let's code!
```

---

## **String Immutability**
Strings cannot be changed, but you can reassign them:
```javascript
let str = "Hello";
str[0] = "h"; // Does nothing
console.log(str); // Hello

str = "hello"; // Reassignment
console.log(str); // hello
```

---

## Summary
- Use **single quotes** or **double quotes** for simple strings.
- Use **backticks** (template literals) for interpolation or multi-line strings.
- Strings are **immutable**.
- Use string methods (`slice`, `toUpperCase`, `trim`, etc.) to manipulate text.