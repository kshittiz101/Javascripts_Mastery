# **JavaScript Conditional Statements**

Conditional statements are used to execute different blocks of code based on certain conditions. JavaScript provides several ways to handle conditions, including `if`, `if-else`, `if-else if`, and `switch`.

---

## **1. if, if-else, and if-else if Statements**

### **How It Works:**

- `if` checks a condition. If it evaluates to `true`, the code inside runs.
- `if-else` allows two possible outcomes—one for `true`, another for `false`.
- `if-else if` allows multiple conditions to be checked sequentially. The **first matching condition executes, and the rest are ignored**.

### **Example 1: Basic if-else**

```js
let age = 18;

if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}
```

**Output:**

```
You are not an adult
```

---

## **2. What Happens When Multiple Conditions Match in if-else if?**

- The `if-else if` statement evaluates conditions from **top to bottom**.
- **As soon as one condition matches, the rest are ignored**.

### **Example 2: First Matching Condition Runs**

```js
let num = 10;

if (num > 5) {
  console.log("Greater than 5");
} else if (num > 8) {
  console.log("Greater than 8");
} else {
  console.log("Less than or equal to 5");
}
```

**Output:**

```
Greater than 5
```

Even though `num > 8` is also `true`, it is never checked because `num > 5` matched first.

---

## **3. switch Statement**

### **How It Works:**

- A `switch` statement **compares a value against multiple fixed cases**.
- If a `case` matches, execution **jumps directly** to that case.
- If `break` is missing, execution **falls through** to the next case.
- The `default` case runs if no match is found.

### **Example 3: Basic switch**

```js
let color = "blue";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log("Unknown color");
}
```

**Output:**

```
Color is blue
```

---

## **4. What Happens When Multiple Conditions Match in switch?**

- Unlike `if-else if`, **all matching cases execute unless a `break` is used**.
- This is called **fall-through behavior**.

### **Example 4: Fall-Through in switch**

```js
let size = "M";

switch (size) {
  case "S":
    console.log("Small size");
  case "M":
    console.log("Medium size");
  case "L":
    console.log("Large size");
    break;
  default:
    console.log("Unknown size");
}
```

**Output:**

```
Medium size
Large size
```

Since `case "M"` matches and has **no `break`**, it also executes `case "L"`.

---

## **5. if-else if vs. switch**

| Feature                | `if-else if`                                     | `switch`                                            |
| ---------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Condition Checking** | Checks conditions **one by one** (top to bottom) | Jumps **directly** to the matching case             |
| **Multiple Matches**   | **Stops after the first match**                  | **Continues if `break` is missing`** (fall-through) |
| **Best for**           | **Range comparisons** (`>`, `<`, `>=`, `<=`)     | **Fixed values** (`"red"`, `10`, etc.)              |
| **Performance**        | **Slower** when checking many conditions         | **Faster** because it jumps directly to a match     |
| **Complexity**         | Can handle **complex conditions** (`x + y > 10`) | **Only works with fixed values** (not expressions)  |
| **Default Handling**   | `else` runs if no condition matches              | `default` runs if no `case` matches                 |

---

## **6. When to Use What?**

**Use `if-else if` when:**

- You need **comparisons** (`>`, `<`, `>=`, etc.).
- The conditions depend on **expressions** (`x + y > 10`).
- You need to handle **complex conditions**.

**Use `switch` when:**

- Checking a **fixed set of values** (`"apple"`, `"banana"`, etc.).
- Code is **cleaner** than multiple `if-else if` statements.
- Performance is important (`switch` is faster for many cases).

---

## **7. Best Practices**

- **Always use `break`** in `switch` to prevent fall-through (unless intentional).
- **Use `default` in switch** to handle unexpected values.
- **Use `if-else if`** for **complex conditions** or **range checks**.
- **Use `switch`** for **fixed, known values**.

---

## **8. Final Example Comparing Both**

```js
let score = 85;

// Using if-else if
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Using switch
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You passed.");
    break;
  default:
    console.log("Invalid grade");
}
```

### **Output:**

```
Grade: B
Good job!
```

---

## **Summary**

- `if-else if` is better for **range checks and complex conditions**.
- `switch` is better for **matching fixed values** and is **faster**.
- **Use `break` in switch** to prevent fall-through.
