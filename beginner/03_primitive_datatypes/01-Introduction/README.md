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
  let sym = Symbol("unique");
  let obj = {
    [sym]: "This is a unique key",
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

| Primitive Type | Description                         | Example                     |
| -------------- | ----------------------------------- | --------------------------- |
| `number`       | Integers, floats, `NaN`, `Infinity` | `42`, `3.14`, `NaN`         |
| `string`       | Textual data                        | `"hello"`, `` `world` ``    |
| `boolean`      | Logical value: `true` or `false`    | `true`, `false`             |
| `undefined`    | Unassigned variable                 | `let x;` (x is `undefined`) |
| `null`         | Intentional absence of value        | `let y = null;`             |
| `bigint`       | Arbitrary-length integers           | `12345678901234567890n`     |
| `symbol`       | Unique and immutable value          | `Symbol('unique')`          |

---

### **6. Key Takeaways**

- Primitives are **immutable** and **passed by value**.
- JavaScript has **7 primitive types**: `number`, `string`, `boolean`, `undefined`, `null`, `bigint`, and `symbol`.
- Use `typeof` to check the type of a primitive.
- `null` and `undefined` are distinct: `null` is intentional, `undefined` is unassigned.
- Primitives are not objects but can be temporarily wrapped in objects for method calls.
