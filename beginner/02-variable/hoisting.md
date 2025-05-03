# **Hoisting in JavaScript**

### **What is Hoisting?**

**Hoisting** is a JavaScript mechanism where **variables and functions are moved ("hoisted") to the top of their scope before execution.**

This means **you can use a function or variable before declaring it** in the code.

---

## **1️⃣ Hoisting with `var` (Partially Hoisted)**

- Variables declared with `var` **are hoisted to the top**, but their **value is `undefined` until assigned.**

### ✅ **Example:**

```javascript
console.log(a);
// ❓ undefined (hoisted but not assigned)
var a = 10;
console.log(a); // 10
```

### **What Happens Behind the Scenes?**

JavaScript interprets this as:

```javascript
var a; // Hoisted to the top
console.log(a); // undefined
a = 10; // Assignment happens here
console.log(a); // 10
```

---

## **2️⃣ Hoisting with `let` and `const` (Hoisted but Not Initialized)**

- **`let` and `const` are hoisted but are not initialized**.
- **Using them before declaration causes a `ReferenceError`.**

### ❌ **Example:**

```javascript
console.log(b);
// ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### **Why?**

Unlike `var`, **`let` and `const` stay in the "Temporal Dead Zone" (TDZ)** until they are assigned a value.

---

## **3️⃣ Hoisting with Functions**

- **Function declarations** are **fully hoisted**.
- You can call a function **before** its declaration.

### ✅ **Example (Works Fine)**:

```javascript
greet(); // ✅ "Hello, world!"

function greet() {
  console.log("Hello, world!");
}
```

### **How JavaScript Interprets This:**

```javascript
function greet() {
  // Fully hoisted
  console.log("Hello, world!");
}
greet();
```

---

## **4️⃣ Hoisting with Function Expressions (`var`, `let`, `const`)**

Function expressions are **not hoisted in the same way as function declarations**.

### ❌ **Example (Hoisting Fails with `var`)**:

```javascript
sayHello();
// ❌ TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello!");
};
```

### **What Happens?**

```javascript
var sayHello; // Hoisted as undefined
sayHello(); // ❌ TypeError (sayHello is undefined)
sayHello = function () {
  console.log("Hello!");
};
```

### ❌ **Example (Hoisting Fails with `let` and `const`)**:

```javascript
console.log(sayHi);
// ❌ ReferenceError: Cannot access 'sayHi' before initialization

let sayHi = function () {
  console.log("Hi!");
};
```

---

## **📌 Summary of Hoisting Behavior**

| Declaration Type                      | Hoisted? | Initialized?               | Usable Before Declaration?   |
| ------------------------------------- | -------- | -------------------------- | ---------------------------- |
| `var` (variable)                      | ✅ Yes   | 🚫 No (set to `undefined`) | ⚠️ Allowed (but `undefined`) |
| `let` (variable)                      | ✅ Yes   | 🚫 No                      | ❌ No (ReferenceError)       |
| `const` (variable)                    | ✅ Yes   | 🚫 No                      | ❌ No (ReferenceError)       |
| Function Declaration                  | ✅ Yes   | ✅ Yes                     | ✅ Yes                       |
| Function Expression (`var`)           | ✅ Yes   | 🚫 No (`undefined`)        | ❌ No (TypeError)            |
| Function Expression (`let` / `const`) | ✅ Yes   | 🚫 No                      | ❌ No (ReferenceError)       |

---

## **🚀 Best Practices to Avoid Hoisting Issues**

✅ **Use `let` and `const` instead of `var`** to avoid unexpected `undefined` values.  
✅ **Always declare variables before using them** to prevent errors.  
✅ **Define functions before calling them** for better code readability.

---

### **Final Thought**

💡 **Hoisting makes JavaScript flexible, but it can cause confusion.** Understanding it helps write **better and bug-free** code! 🚀
