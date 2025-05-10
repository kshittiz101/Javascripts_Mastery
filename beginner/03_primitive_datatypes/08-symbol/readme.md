In JavaScript, a **`Symbol`** is a **primitive data type** introduced in ES6. It is used to create **unique and immutable identifiers** for object properties.

### In short:

- `Symbol()` creates a unique value.
- Symbols are **not equal**, even if they have the same description.
- Useful for **avoiding property name collisions** in objects.

### Example:

```js
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false

const user = {
  [sym1]: 123,
};

console.log(user[sym1]); // 123
```
