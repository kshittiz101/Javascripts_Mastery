## JavaScript String Documentation - Key Methods and Properties

The `String` data type in JavaScript represents **immutable sequences of Unicode characters**. This documentation summarizes the most important properties and methods available on JavaScript strings, both primitives and objects (accessible via auto-boxing).

---

### ✅ Key Property

| Property | Description                             | Example        | Output |
| -------- | --------------------------------------- | -------------- | ------ |
| length   | Returns the number of UTF-16 code units | "hello".length | 5      |

---

### ✅ Key Methods

#### 🔁 Transformation

| Method                          | Description                       | Example                      | Output  |
| ------------------------------- | --------------------------------- | ---------------------------- | ------- |
| toUpperCase()                   | Converts to uppercase             | "hello".toUpperCase()        | "HELLO" |
| toLowerCase()                   | Converts to lowercase             | "HELLO".toLowerCase()        | "hello" |
| trim()                          | Removes whitespace from both ends | " hello ".trim()             | "hello" |
| replace(search, replacement)    | Replaces first match              | "hello".replace("h", "H")    | "Hello" |
| replaceAll(search, replacement) | Replaces all matches              | "hello".replaceAll("l", "L") | "heLLo" |

#### 🧩 Substring Extraction

| Method                | Description                               | Example                 | Output |
| --------------------- | ----------------------------------------- | ----------------------- | ------ |
| slice(start, end)     | Extracts substring (end is exclusive)     | "hello".slice(1, 4)     | "ell"  |
| substring(start, end) | Extracts substring; negative indices = 0  | "hello".substring(1, 4) | "ell"  |
| charAt(index)         | Returns character at index                | "hello".charAt(1)       | "e"    |
| at(index)             | Returns char at index (supports negative) | "hello".at(-1)          | "o"    |

#### 🔍 Search and Matching

| Method                | Description                            | Example                  | Output |
| --------------------- | -------------------------------------- | ------------------------ | ------ |
| includes(substring)   | Checks if substring exists             | "hello".includes("ell")  | true   |
| startsWith(substring) | Checks if string starts with substring | "hello".startsWith("he") | true   |
| endsWith(substring)   | Checks if string ends with substring   | "hello".endsWith("lo")   | true   |
| indexOf(substring)    | First index of substring or -1         | "hello".indexOf("l")     | 2      |

#### ✂️ Splitting

| Method     | Description                           | Example            | Output           |
| ---------- | ------------------------------------- | ------------------ | ---------------- |
| split(sep) | Splits string into array by separator | "a,b,c".split(",") | \["a", "b", "c"] |

---

### ✅ Key Static Methods

| Method                          | Description                             | Example                                  | Output    |
| ------------------------------- | --------------------------------------- | ---------------------------------------- | --------- |
| String.fromCharCode(...codes)   | Creates string from UTF-16 code units   | String.fromCharCode(104,101,108,108,111) | "hello"   |
| String.fromCodePoint(...points) | Creates string from Unicode code points | String.fromCodePoint(128522)             | "😊" (😊) |

---

### ✅ Example Code

```js
const str = ' Hello, World! ';
console.log('length:', str.length); // 15
console.log('toUpperCase():', str.toUpperCase()); // " HELLO, WORLD! "
console.log('trim():', str.trim()); // "Hello, World!"
console.log('replace():', str.replace('World', 'JavaScript')); // " Hello, JavaScript! "
console.log('slice():', str.slice(1, 6)); // "Hello"
console.log('includes():', str.includes('World')); // true
console.log('split():', str.split(',')); // [" Hello", " World! "]
console.log('fromCharCode():', String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
```

---

### 📝 Notes

- **Prefer primitives**: Use `"hello"` over `new String("hello")`.
- **Auto-boxing**: Methods are available on string literals.
- **Immutability**: String methods return new values; strings are not changed in place.
- **Unicode handling**: `length` counts UTF-16 units (e.g., `"😊".length === 2`).
