## 🔹 `forEach()` – Short Notes

### ✅ Purpose:

- Executes a function for **each item in an array**.
- Used for **side effects** like logging or updating values.
- **Does not return** a new array.

---

### 🔹 Syntax:

```javascript
array.forEach((element, index) => {
  // code
});
```

---

### 🔹 Example:

```javascript
let nums = [1, 2, 3];
nums.forEach(num => console.log(num));
// Output: 1 2 3
```

---

### 🔹 Key Points:

- Cannot `break` or `return` early.
- Returns `undefined`.
- Use `map()` if you want a new array.
