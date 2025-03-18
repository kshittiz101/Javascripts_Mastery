# **Primitive Data Types in JavaScript**

JavaScript has **7 primitive data types**, which are the most basic building blocks of the language. They are immutable, meaning their values cannot be changed after creation. Here’s everything you need to know about them:

---

### **1. List of Primitive Data Types**
1. **`number`**: Represents both integers and floating-point numbers.
2. **`string`**: Represents textual data (sequence of characters).
3. **`boolean`**: Represents a logical value: `true` or `false`.
4. **`undefined`**: Represents a variable that has been declared but not assigned a value.
5. **`null`**: Represents the intentional absence of any object value.
6. **`bigint`**: Represents integers of arbitrary length.
7. **`symbol`**: Represents a unique and immutable value, often used as object property keys.

---

### **2. Key Characteristics of Primitive Types**
1. **Immutable**:
   - Once a primitive value is created, it cannot be changed.
   - Example:
     ```javascript
     let str = "hello";
     str[0] = "H"; 
     // This does nothing
     console.log(str); 
     // "hello" (unchanged)
     ```

2. **Passed by Value**:
   - When assigned to a variable or passed to a function, a **copy** of the value is created.
   - Example:
     ```javascript
     let a = 10;
     let b = a; // b gets a copy of the value of a
     b = 20;
     console.log(a); // 10 (unchanged)
     ```

3. **Not Objects**:
   - Primitives are not objects and do not have methods or properties.
   - However, JavaScript can temporarily wrap them in objects (called **"boxing"**) to allow method calls.
   - Example:
     ```javascript
     let str = "hello";
     console.log(str.length); // 5 (temporary object created)
     ```

---

### **3. Detailed Explanation of Each Primitive Type**

#### **1. `number`**
- Represents both integers and floating-point numbers.
- Special values: `NaN` (Not-a-Number), `Infinity`, `-Infinity`.
- Example:
  ```javascript
  let num = 42;
  let pi = 3.14;
  let result = 10 / "abc"; // NaN
  ```

#### **2. `string`**
- Represents textual data.
- Can be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` `` for template literals).
- Example:
  ```javascript
  let name = "John";
  let greeting = `Hello, ${name}!`; // Template literal
  ```

#### **3. `boolean`**
- Represents a logical value: `true` or `false`.
- Often used in conditions and comparisons.
- Example:
  ```javascript
  let isActive = true;
  if (isActive) {
    console.log("Active");
  }
  ```

#### **4. `undefined`**
- Represents a variable that has been declared but not assigned a value.
- Example:
  ```javascript
  let x;
  console.log(x); // undefined
  ```

#### **5. `null`**
- Represents the intentional absence of any object value.
- Often used to explicitly indicate "no value" or "empty."
- Example:
  ```javascript
  let empty = null;
  ```

#### **6. `bigint`**
- Represents integers of arbitrary length.
- Created by appending `n` to the end of an integer.
- Example:
  ```javascript
  let bigNum = 1234567890123456789012345678901234567890n;
  ```

#### **7. `symbol`**
- Represents a unique and immutable value.
- Often used as object property keys to avoid collisions.
- Example:
  ```javascript
  let sym = Symbol('unique');
  let obj = {
    [sym]: "This is a unique key"
  };
  console.log(obj[sym]); // "This is a unique key"
  ```

---

### **4. Common Pitfalls and Tips**
1. **`typeof` Operator**:
   - Use `typeof` to check the type of a primitive.
   - Example:
     ```javascript
     console.log(typeof 42); // "number"
     console.log(typeof "hello"); // "string"
     console.log(typeof null); // "object" (historical bug in JavaScript)
     ```

2. **`null` vs `undefined`**:
   - `null` is an intentional absence of value, while `undefined` means a variable has not been assigned a value.
   - Example:
     ```javascript
     let x; // x is undefined
     let y = null; // y is explicitly set to null
     ```

3. **Immutability**:
   - Primitives cannot be changed, but variables holding them can be reassigned.
   - Example:
     ```javascript
     let str = "hello";
     str = "world"; // Reassignment is allowed
     ```

4. **Temporary Boxing**:
   - JavaScript temporarily wraps primitives in objects to allow method calls.
   - Example:
     ```javascript
     let str = "hello";
     console.log(str.toUpperCase()); // "HELLO" (temporary object created)
     ```

---

### **5. Summary Table**

| Primitive Type | Description                          | Example                     |
|----------------|--------------------------------------|-----------------------------|
| `number`       | Integers, floats, `NaN`, `Infinity`  | `42`, `3.14`, `NaN`         |
| `string`       | Textual data                         | `"hello"`, `` `world` ``    |
| `boolean`      | Logical value: `true` or `false`     | `true`, `false`             |
| `undefined`    | Unassigned variable                  | `let x;` (x is `undefined`) |
| `null`         | Intentional absence of value         | `let y = null;`             |
| `bigint`       | Arbitrary-length integers            | `12345678901234567890n`     |
| `symbol`       | Unique and immutable value           | `Symbol('unique')`          |

---

### **6. Key Takeaways**
- Primitives are **immutable** and **passed by value**.
- JavaScript has **7 primitive types**: `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`.
- Use `typeof` to check the type of a primitive.
- `null` and `undefined` are distinct: `null` is intentional, `undefined` is unassigned.
- Primitives are not objects but can be temporarily wrapped in objects for method calls.





# Q1. **What Does Immutability Mean for Numbers?**
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
