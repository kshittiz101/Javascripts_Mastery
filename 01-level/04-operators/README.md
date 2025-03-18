# **JavaScript Operators**

Operators are symbols that perform operations on values and variables. JavaScript provides different types of operators for performing calculations, comparisons, logical decisions, and more.

---

## **1. Arithmetic Operators**

Used to perform mathematical operations.

- `+` Addition (`5 + 2` → `7`)
- `-` Subtraction (`5 - 2` → `3`)
- `*` Multiplication (`5 * 2` → `10`)
- `/` Division (`5 / 2` → `2.5`)
- `%` Modulus (Remainder) (`5 % 2` → `1`)
- `**` Exponentiation (`5 ** 2` → `25`)
- `++` Increment (`let x = 5; x++` → `6`)
- `--` Decrement (`let y = 5; y--` → `4`)

**Example:**

```javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1 (10 divided by 3 leaves remainder 1)
```

---

## **2. Assignment Operators**

Used to assign values to variables.

- `=` Assign (`x = 5` → `x = 5`)
- `+=` Add and assign (`x += 3` → `x = x + 3`)
- `-=` Subtract and assign (`x -= 3` → `x = x - 3`)
- `*=` Multiply and assign (`x *= 3` → `x = x * 3`)
- `/=` Divide and assign (`x /= 3` → `x = x / 3`)
- `%=` Modulus and assign (`x %= 3` → `x = x % 3`)
- `**=` Exponentiation and assign (`x **= 3` → `x = x ** 3`)

**Example:**

```javascript
let num = 10;
num += 5; // Same as num = num + 5
console.log(num); // 15
```

---

## **3. Comparison Operators**

Used to compare values and return `true` or `false`.

- `==` Equal to (value only) (`5 == "5"` → `true`)
- `===` Strict equal (value & type) (`5 === "5"` → `false`)
- `!=` Not equal (value only) (`5 != "5"` → `false`)
- `!==` Strict not equal (value & type) (`5 !== "5"` → `true`)
- `>` Greater than (`10 > 5` → `true`)
- `<` Less than (`10 < 5` → `false`)
- `>=` Greater than or equal to (`5 >= 5` → `true`)
- `<=` Less than or equal to (`5 <= 3` → `false`)

**Example:**

```javascript
console.log(10 > 5); // true
console.log(5 === "5"); // false (different types)
console.log(5 == "5"); // true (only checks value)
```

---

## **4. Logical Operators**

Used for logical operations (AND, OR, NOT).

- `&&` Logical AND (both true) (`true && false` → `false`)
- `||` Logical OR (at least one true) (`true || false` → `true`)
- `!` Logical NOT (negation) (`!true` → `false`)

**Example:**

```javascript
let x = 10,
  y = 5;
console.log(x > 5 && y < 10); // true (both conditions true)
console.log(x < 5 || y < 10); // true (at least one condition true)
console.log(!(x > 5)); // false (negates true)
```

---

## **5. Bitwise Operators**

Used for operations at the binary level.

- `&` AND (`5 & 1` → `1`)
- `|` OR (`5 | 1` → `5`)
- `^` XOR (`5 ^ 1` → `4`)
- `~` NOT (`~5` → `-6`)
- `<<` Left shift (`5 << 1` → `10`)
- `>>` Right shift (`5 >> 1` → `2`)

**Example:**

```javascript
console.log(5 & 1); // 1 (binary: 0101 & 0001 = 0001)
console.log(5 | 1); // 5 (binary: 0101 | 0001 = 0101)
```

---

## **6. Ternary (Conditional) Operator**

Short-hand for `if-else` condition.

- `? :` Ternary Operator (`condition ? expr1 : expr2`)

**Example:**

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## **7. Type Operators**

Used to check types.

- `typeof` Returns type (`typeof 42` → `"number"`)
- `instanceof` Checks instance of an object (`x instanceof Array` → `true`)

**Example:**

```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log([] instanceof Array); // true
```

---

## **8. Nullish Coalescing Operator (`??`)**

Returns the right-hand operand if the left-hand operand is `null` or `undefined`.

**Example:**

```javascript
let username = null;
let defaultName = username ?? "Guest";
console.log(defaultName); // "Guest"
```

---

## **Best Practices**

- Use `===` instead of `==` for strict comparisons.
- Use `??` instead of `||` when handling `null` or `undefined`.
- Avoid bitwise operators unless necessary.
- Use ternary (`? :`) for simple `if-else` cases.

---

## **Conclusion**

JavaScript operators allow you to perform various tasks like calculations, comparisons, logic checks, and more. Understanding them helps write efficient and error-free code.
