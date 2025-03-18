# Number in Js

In JavaScript, the **`number`** data type is used to represent both **integers** and **floating-point numbers**. It is one of the primitive data types in JavaScript and is used extensively for mathematical operations. Here’s everything you need to know about the `number` data type:

---

### **1. Characteristics of the `number` Type**
- Represents both **integers** (e.g., `42`) and **floating-point numbers** (e.g., `3.14`).
- Follows the **IEEE 754 standard** for representing floating-point numbers.
- Has special values like `NaN`, `Infinity`, and `-Infinity`.
- Is a **primitive data type**, meaning it is immutable (its value cannot be changed once created).

---

### **2. Examples of `number` Values**
```javascript
let integer = 42; // Integer
let float = 3.14; // Floating-point number
let negative = -10; // Negative number
let scientific = 2.5e4; // Scientific notation (25000)
```

---

### **3. Special Number Values**
JavaScript has some special values that are part of the `number` type:

#### **a. `NaN` (Not-a-Number)**
- Represents a value that is "not a number."
- Often the result of invalid mathematical operations.
- Example:
  ```javascript
  let result = 10 / "hello"; // NaN
  console.log(result); // NaN
  console.log(typeof result); // "number" (NaN is technically a number type)
  ```

#### **b. `Infinity` and `-Infinity`**
- Represents positive and negative infinity, respectively.
- Occurs when a number exceeds the upper or lower limit of JavaScript's number range.
- Example:
  ```javascript
  let positiveInfinity = Infinity;
  let negativeInfinity = -Infinity;
  console.log(1 / 0); // Infinity
  console.log(-1 / 0); // -Infinity
  ```

#### **c. `Number.MAX_VALUE` and `Number.MIN_VALUE`**
- `Number.MAX_VALUE`: The largest positive number representable in JavaScript (`1.7976931348623157e+308`).
- `Number.MIN_VALUE`: The smallest positive number representable in JavaScript (`5e-324`).
- Example:
  ```javascript
  console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
  console.log(Number.MIN_VALUE); // 5e-324
  ```

#### **d. `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`**
- `Number.MAX_SAFE_INTEGER`: The largest integer that can be safely represented (`9007199254740991`).
- `Number.MIN_SAFE_INTEGER`: The smallest integer that can be safely represented (`-9007199254740991`).
- Example:
  ```javascript
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
  ```

---

### **4. Working with Numbers**

#### **a. Arithmetic Operations**
- JavaScript supports standard arithmetic operations: `+`, `-`, `*`, `/`, `%` (modulus), and `**` (exponentiation).
- Example:
  ```javascript
  let a = 10;
  let b = 3;
  console.log(a + b); // 13
  console.log(a - b); // 7
  console.log(a * b); // 30
  console.log(a / b); // 3.3333333333333335
  console.log(a % b); // 1
  console.log(a ** b); // 1000
  ```

#### **b. Math Functions**
- JavaScript provides a built-in `Math` object for advanced mathematical operations.
- Example:
  ```javascript
  console.log(Math.sqrt(16)); // 4 (square root)
  console.log(Math.pow(2, 3)); // 8 (2^3)
  console.log(Math.round(3.14)); // 3 (rounding)
  console.log(Math.floor(3.99)); // 3 (round down)
  console.log(Math.ceil(3.01)); // 4 (round up)
  console.log(Math.random()); // Random number between 0 and 1
  ```

#### **c. Parsing Numbers**
- Use `parseInt()` and `parseFloat()` to convert strings to numbers.
- Example:
  ```javascript
  let str = "42";
  let num = parseInt(str); // 42 (integer)
  let floatStr = "3.14";
  let floatNum = parseFloat(floatStr); // 3.14 (floating-point)
  ```

#### **d. Checking for Numbers**
- Use `isNaN()` to check if a value is `NaN`.
- Use `Number.isFinite()` to check if a value is a finite number.
- Example:
  ```javascript
  console.log(isNaN(10 / "hello")); // true
  console.log(Number.isFinite(42)); // true
  console.log(Number.isFinite(Infinity)); // false
  ```

---

### **5. Precision and Limitations**
- JavaScript numbers are stored as **64-bit floating-point numbers**, which can lead to precision issues with very large or very small numbers.
- Example:
  ```javascript
  console.log(0.1 + 0.2); // 0.30000000000000004 (precision issue)
  ```

---

### **6. BigInt for Large Integers**
- For integers larger than `Number.MAX_SAFE_INTEGER`, use the `bigint` type by appending `n` to the number.
- Example:
  ```javascript
  let bigNum = 9007199254740992n;
  console.log(bigNum + 1n); // 9007199254740993n
  ```

---

### **7. Summary of Key Points**
- The `number` type represents both integers and floating-point numbers.
- Special values include `NaN`, `Infinity`, and `-Infinity`.
- Use `Math` for advanced mathematical operations.
- Be aware of precision limitations with floating-point numbers.
- Use `bigint` for very large integers.



## Q1.  **What Does Immutability Mean for Numbers?**
- **Immutability** means that once a primitive value (like a number) is created, it **cannot be changed**. Any operation on the number creates a **new value** rather than modifying the original.
- For example, if you have the number `10`, you cannot change `10` itself. Instead, operations like `10 + 5` create a new number (`15`), leaving the original `10` unchanged.

---

### **How Does Immutability Work with Numbers?**

#### 1. **Numbers Are Primitive Values**
- In JavaScript, numbers are **primitive data types**, meaning they are not objects and are stored directly in memory.
- When you create a number, JavaScript allocates memory for that specific value.

#### 2. **Operations Create New Values**
- When you perform an operation on a number, JavaScript does not modify the original number. Instead, it creates a **new number** with the result of the operation.
- Example:
  ```javascript
  let a = 10; // a points to the number 10
  let b = a + 5; // b points to a new number, 15
  console.log(a); // 10 (unchanged)
  console.log(b); // 15 (new value)
  ```

#### 3. **Reassignment vs. Immutability**
- Reassigning a variable does not change the original number. It simply points the variable to a new value.
- Example:
  ```javascript
  let a = 10; // a points to 10
  a = 50; // a now points to 50 (10 is still in memory, unchanged)
  console.log(a); // 50
  ```

---

### **What Happens in Memory?**

#### 1. **Creating a Number**
- When you declare a number, JavaScript stores it in memory.
- Example:
  ```javascript
  let a = 10;
  ```
  - Memory:
    ```
    a -> 10
    ```

#### 2. **Performing an Operation**
- When you perform an operation, JavaScript creates a new number and stores it in memory.
- Example:
  ```javascript
  let b = a + 5; // b = 15
  ```
  - Memory:
    ```
    a -> 10
    b -> 15
    ```

#### 3. **Reassigning a Variable**
- When you reassign a variable, it points to a new value, but the original value remains unchanged.
- Example:
  ```javascript
  a = 50; // a now points to 50
  ```
  - Memory:
    ```
    a -> 50
    b -> 15
    ```

---

### **Why Is This Important?**
1. **Predictability**:
   - Immutability ensures that the original value remains unchanged, making your code more predictable and easier to debug.

2. **Performance**:
   - Primitive values like numbers are lightweight and fast because they are stored directly in memory.

3. **No Side Effects**:
   - Since numbers are immutable, you don’t have to worry about unintended side effects when passing them to functions or performing operations.

---

### **Example Demonstrating Immutability**

```javascript
let num = 10; // num points to 10

// Performing an operation creates a new value
let newNum = num + 5; // newNum points to 15
console.log(num); // 10 (unchanged)
console.log(newNum); // 15 (new value)

// Reassigning num points it to a new value
num = 20; // num now points to 20
console.log(num); // 20
```

---

### **Key Takeaways**
- Numbers are **immutable**: Once created, their value cannot be changed.
- Operations on numbers (e.g., `+`, `-`, `*`, `/`) create **new values**.
- Reassigning a variable changes what it points to, but the original number remains unchanged in memory.
- Immutability ensures predictability, performance, and avoids side effects.
