## 🔁 JavaScript Loops – Perfect Notes

### 📌 What is a Loop?

A loop is a control structure that allows code to be executed repeatedly based on a condition. It helps avoid repetition and makes code more efficient.

---

## 1. `for` Loop

**Use when** the number of iterations is known.

**Syntax:**

```js
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

**Key Points:**

- Initialization runs once.
- Condition is checked before each iteration.
- Increment/decrement updates the loop variable.

---

## 2. `while` Loop

**Use when** the number of iterations is unknown.

**Syntax:**

```js
while (condition) {
  // Code to execute
}
```

**Example:**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**Key Points:**

- Condition checked **before** executing the block.
- Risk of infinite loop if condition never becomes false.

---

## 3. `do...while` Loop

**Use when** you want the loop to run at least once.

**Syntax:**

```js
do {
  // Code to execute
} while (condition);
```

**Example:**

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

**Key Points:**

- Code runs **once before** checking the condition.

---

## 4. `for...in` Loop

**Use for** iterating over **object properties**.

**Syntax:**

```js
for (let key in object) {
  // Code using key or object[key]
}
```

**Example:**

```js
const user = { name: 'Alice', age: 25 };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

**Key Points:**

- Iterates over **enumerable keys**.
- Use `hasOwnProperty()` to avoid inherited properties.

---

## 5. `for...of` Loop

**Use for** iterating over **iterable values** like arrays, strings, maps, etc.

**Syntax:**

```js
for (let value of iterable) {
  // Code using value
}
```

**Example:**

```js
const nums = [10, 20, 30];
for (let num of nums) {
  console.log(num);
}
```

**Key Points:**

- Works on arrays, strings, sets, maps.
- Returns values directly (not keys/indexes).

---

## 6. Loop Alternatives (Array Methods)

Modern JavaScript encourages using array methods:

### `forEach()`

```js
[1, 2, 3].forEach((value, index) => {
  console.log(index, value);
});
```

### `map()`

```js
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### `filter()`

```js
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

### `reduce()`

```js
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6
```

---

## 7. Loop Control Statements

### `break`

Exits the loop immediately.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}
```

### `continue`

Skips current iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}
```

---

## 8. Nested Loops

Used to loop within a loop (e.g., for 2D arrays).

**Example:**

```js
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
```

---

## 9. Common Pitfalls

- ❌ **Infinite Loops**

```js
while (true) {
  // Never ends
}
```

- ❌ **Off-by-One Errors**

```js
for (let i = 0; i <= 5; i++) // Includes 5 unintentionally
```

- ❌ **Using `for...in` for Arrays**
  - Might loop inherited properties.
  - Use `for...of` or indexed `for`.

---

## 10. Best Practices

- ✅ Use `for...of` for arrays and iterables.
- ✅ Use `for...in` only for plain objects.
- ✅ Use `const` in `forEach`/`map` loops if no reassignment is needed.
- ✅ Prefer `map`, `filter`, `reduce` for cleaner, functional code.
- ✅ Test boundary conditions to avoid logic errors.
- ✅ Keep loops small and delegate complex logic to functions.

---

## ✅ Summary Table

| Loop Type    | Best For           | Checks Condition | Runs Once First? | Accesses |
| ------------ | ------------------ | ---------------- | ---------------- | -------- |
| `for`        | Known iterations   | Before loop      | No               | index    |
| `while`      | Unknown iterations | Before loop      | No               | custom   |
| `do...while` | Run at least once  | After loop       | Yes              | custom   |
| `for...in`   | Object properties  | N/A              | Yes              | key      |
| `for...of`   | Iterable values    | N/A              | Yes              | value    |

---
