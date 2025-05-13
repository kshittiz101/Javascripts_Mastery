## 🔹 `map()` – Short Notes

### ✅ Purpose:

- Creates a **new array** by applying a function to **each item** of an array.
- Used for **transforming** data.
- Original array is **not modified**.

---

### 🔹 Syntax:

```javascript
let newArray = array.map((element, index) => {
  // return transformed element
});
```

---

### 🔹 Example:

```javascript
let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 🔹 Key Points:

- Returns a **new array**.
- Always use `return` inside the function.
- Unlike `forEach()`, `map()` is **chainable**.
