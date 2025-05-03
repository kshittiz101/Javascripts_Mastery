# **JavaScript Functions**

## **1. What is a Function?**

A function is a reusable block of code that performs a specific task. It helps in organizing code and avoiding repetition. Functions can take input, process it, and return an output.

### **Function Syntax:**

```javascript
function functionName(parameters) {
  // Function body (code to execute)
  return value;
  // Optional return statement
}
```

- `functionName` is the name of the function.
- `parameters` are input values (optional).
- `return` is used to send back a result (optional).

---

## **2. Function Declaration**

A function is declared using the `function` keyword. It does not execute immediately; it runs only when called.

### **Example:**

```javascript
// function declaration
function greet() {
  console.log("Hello, World!");
}

greet();
// Calling the function
```

### **Explanation:**

- The `greet()` function is defined but does not execute until it is called.
- When called, it prints `"Hello, World!"` to the console.

---

## **3. Function Parameters and Arguments**

Functions can accept parameters, which allow them to work with dynamic values.

### **Example:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!
```

### **Explanation:**

- The function `greet(name)` takes one parameter, `name`.
- When calling the function, we pass an argument (e.g., `"Alice"`).
- The function outputs a personalized greeting.

### **Multiple Parameters Example:**

```javascript
function add(a, b) {
  console.log(a + b);
}

add(3, 5); // Output: 8
```

- Here, `add(a, b)` takes two parameters, `a` and `b`, and prints their sum.

---

## **4. Return Values**

Instead of displaying values inside the function, we can return them using the `return` statement.

### **Example:**

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(4, 6);
console.log(sum); // Output: 10
```

### **Explanation:**

- The function computes `a + b` and returns the result.
- The returned value is stored in `sum` and displayed using `console.log`.

### **Key Rule:**

- A function stops executing once it hits `return`.
- Any code after `return` inside the function will not run.

---

## **5. Default Parameters**

If no argument is provided when calling a function, JavaScript assigns a default value to the parameter.

### **Example:**

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!
```

### **Explanation:**

- The parameter `name` has a default value `"Guest"`.
- If no argument is passed, it uses `"Guest"`, otherwise, it uses the provided value.

---

## **6. Function Expressions**

In JavaScript, functions can be stored in variables. This is called a **function expression**.

### **Example:**

```javascript
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // Output: 12
```

### **Explanation:**

- The function is assigned to a variable `multiply`.
- It can be called using `multiply(3, 4)`, just like a regular function.

---

## **7. Arrow Functions (ES6)**

Arrow functions provide a shorter syntax for writing functions.

### **Basic Syntax:**

```javascript
const functionName = (parameters) => expression;
```

### **Example:**

```javascript
const square = (x) => x * x;
console.log(square(5)); // Output: 25
```

### **Explanation:**

- The arrow function `square(x)` returns `x * x` in a concise way.

### **Arrow Function with Multiple Parameters:**

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### **Arrow Function with No Parameters:**

```javascript
const greet = () => console.log("Hello!");
greet(); // Output: Hello!
```

### **Advantages of Arrow Functions:**

- Less code and cleaner syntax.
- No need for `function` keyword.
- Implicit return for single-expression functions.

---

## **8. Function Scope**

Scope defines where a variable can be accessed in the program.

### **Types of Scope:**

1. **Local Scope** – Variables declared inside a function are accessible only within that function.
2. **Global Scope** – Variables declared outside any function are accessible throughout the script.

### **Example:**

```javascript
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

testScope();
console.log(globalVar); // Accessible
console.log(localVar); // Error: localVar is not defined
```

### **Explanation:**

- `globalVar` is accessible everywhere.
- `localVar` is only accessible inside `testScope()`.

---

## **9. Function Hoisting**

JavaScript moves function declarations to the top of their scope before execution. This means you can call a function before declaring it.

### **Example:**

```javascript
hello(); // Output: Hello!

function hello() {
  console.log("Hello!");
}
```

### **Explanation:**

- The function `hello()` is called before its declaration.
- This works because JavaScript hoists function declarations.

---

## **10. Higher-Order Functions**

A function that takes another function as a parameter or returns a function is called a **higher-order function**.

### **Example:**

```javascript
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(5, 3, (x, y) => x + y);
console.log(result); // Output: 8
```

### **Explanation:**

- `operate(a, b, operation)` takes a function `operation` as an argument.
- The arrow function `(x, y) => x + y` is passed as an argument.

---

## **11. Callback Functions**

A callback function is passed as an argument to another function and executed later.

### **Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
```

### **Explanation:**

- `fetchData()` simulates fetching data with a delay.
- Once the data is fetched, it calls `processData()`.

---

## **12. Recursive Functions**

A function that calls itself is called a **recursive function**.

### **Example:**

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

### **Explanation:**

- The function keeps calling itself until `n` reaches `0`.

---

## **Summary**

1. Functions are reusable blocks of code.
2. Functions can take parameters and return values.
3. Default parameters prevent `undefined` values.
4. Function expressions store functions in variables.
5. Arrow functions provide a shorter syntax.
6. Scope defines variable accessibility.
7. Hoisting allows calling functions before declaration.
8. Higher-order functions and callbacks make JavaScript powerful.
9. Recursion helps solve problems that require repetitive tasks.
