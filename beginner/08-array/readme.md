# Introduction to array in js

In JavaScript, an **array** is a data structure used to store multiple values in a single variable. It is versatile and widely used for lists, collections, or sequences of data

![My Logo](/images/image.png)

### **Characteristics of Arrays in JavaScript**

1. **Ordered Collection**: Arrays maintain the order of elements (indexed from `0`).
2. **Heterogeneous**: Can store elements of different types (e.g., numbers, strings, objects, etc.).
3. **Dynamic Size**: Arrays can grow or shrink dynamically (no fixed length).
4. **Mutable**: Elements can be modified, added, or removed.
5. **Object Type**: Arrays are a special type of object (`typeof array === 'object'`).
6. **Sparse**: Arrays can have "empty" or undefined slots (e.g., `[1, , 3]`).
7. **Built-in Methods**: Arrays come with many methods for manipulation (e.g., `push`, `pop`, `map`, etc.).

## Syntax to create an array

```js
// creation of an array
// create array using literal notation
let arr = [10, 20, 30, 40];
console.log(arr);

// 2. Create using Array constructor
let arr2 = new Array(3); // [undefined, undefined, undefined]
console.log(arr2);

let arr3 = new Array(10, 20, 35);
console.log(arr3);
```

## 02. Adding and removing methods

### **Adding Elements**

These methods allow you to append, prepend, or insert elements into an array.

1. **`push(...items)`**: Adds one or more elements to the **end** of the array.

   - Modifies the original array.
   - Returns the new length of the array.

   ```jsx
   let arr = [1, 2, 3];
   arr.push(4, 5); // Returns 5
   console.log(arr); // [1, 2, 3, 4, 5]
   ```

2. **`unshift(...items)`**: Adds one or more elements to the **beginning** of the array.

   - Modifies the original array.
   - Returns the new length of the array.

   ```jsx
   let arr = [1, 2, 3];
   arr.unshift(0, -1); // Returns 5
   console.log(arr); // [-1, 0, 1, 2, 3]
   ```

3. **`splice(start, deleteCount, ...items)`**: Inserts elements at a specific index (can also remove elements).

   - `start`: Index to begin insertion.
   - `deleteCount`: Number of elements to remove (set to `0` for pure insertion).
   - `items`: Elements to add.
   - Modifies the original array.
   - Returns an array of removed elements (empty if none removed).

   ```jsx
   let arr = [1, 2, 3];
   arr.splice(1, 0, 'a', 'b'); // Returns []
   console.log(arr); // [1, 'a', 'b', 2, 3]
   ```

4. **Direct Assignment**: Add elements by assigning to an index (can create sparse arrays if index is beyond length).

   ```jsx
   let arr = [1, 2, 3];
   arr[3] = 4;
   console.log(arr); // [1, 2, 3, 4]
   arr[10] = 10; // Creates sparse array
   console.log(arr); // [1, 2, 3, 4, <6 empty slots>, 10]
   ```

---

### **Removing Elements**

These methods allow you to remove elements from the array.

1. **`pop()`**: Removes the **last** element of the array.

   - Modifies the original array.
   - Returns the removed element.

   ```jsx
   let arr = [1, 2, 3];
   let removed = arr.pop(); // Returns 3
   console.log(arr); // [1, 2]
   console.log(removed); // 3
   ```

2. **`shift()`**: Removes the **first** element of the array.

   - Modifies the original array.
   - Returns the removed element.

   ```jsx
   let arr = [1, 2, 3];
   let removed = arr.shift(); // Returns 1
   console.log(arr); // [2, 3]
   console.log(removed); // 1
   ```

3. **`splice(start, deleteCount)`**: Removes elements starting from a specific index.

   - `start`: Index to begin removal.
   - `deleteCount`: Number of elements to remove.
   - Modifies the original array.
   - Returns an array of removed elements.

   ```jsx
   let arr = [1, 2, 3, 4];
   let removed = arr.splice(1, 2); // Returns [2, 3]
   console.log(arr); // [1, 4]
   console.log(removed); // [2, 3]
   ```

4. **`delete` Operator**: Removes an element at a specific index, leaving an "empty" slot (creates a sparse array).

   - Does not change the array's length.

   ```jsx
   let arr = [1, 2, 3];
   delete arr[1];
   console.log(arr); // [1, <1 empty slot>, 3]
   console.log(arr.length); // 3
   ```

5. **Set `length` Property**: Truncates the array to remove elements from the end.

   - Modifies the original array.

   ```jsx
   let arr = [1, 2, 3, 4];
   arr.length = 2;
   console.log(arr); // [1, 2]
   ```

---

### **Key Points**

- **Mutating vs. Non-Mutating**:
  - `push`, `unshift`, `pop`, `shift`, `splice`, and `delete` modify the original array.
  - Direct assignment and `length` manipulation also modify the array.
- **Sparse Arrays**: Using `delete` or assigning to non-sequential indices can create sparse arrays, which may affect performance or behavior.
- **Use Case**:
  - Use `push`/`pop` for stack-like operations.
  - Use `unshift`/`shift` for queue-like operations.
  - Use `splice` for flexible insertion/removal at any index.
- **Performance**: Operations at the end (`push`/`pop`) are generally faster than at the start (`unshift`/`shift`) due to re-indexing.

---

### **Quick Example Combining Methods**

```jsx
let arr = [1, 2, 3];

// Add elements
arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]
arr.splice(2, 0, 'a'); // [0, 1, 'a', 2, 3, 4]

// Remove elements
arr.pop(); // [0, 1, 'a', 2, 3]
arr.shift(); // [1, 'a', 2, 3]
arr.splice(1, 1); // [1, 2, 3]

console.log(arr); // [1, 2, 3]
```
