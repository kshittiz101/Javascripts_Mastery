# Reference type or Non primitive types in js

In JavaScript, data types are categorized into **primitive** and **non-primitive** types. While **primitive** types represent simple data and are immutable, **non-primitive** types (also known as **reference** types) are more complex and mutable. Understanding non-primitive data types is essential for effective JavaScript programming, as they allow you to store collections of data and more complex entities.

## Non-Primitive Data Types in JavaScript

1. **Objects**

   - **Description:** The most fundamental non-primitive type. Objects are collections of key-value pairs where the keys are strings (or Symbols) and the values can be of any type, including other objects.
   - **Example:**
     ```javascript
     const person = {
       name: "Alice",
       age: 30,
       isEmployed: true,
     };
     ```

2. **Arrays**

   - **Description:** A special type of object used to store ordered collections of values. Arrays can hold elements of different types, including other arrays and objects.
   - **Example:**
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const mixed = [1, "two", { three: 3 }, [4]];
     ```

3. **Functions**

   - **Description:** In JavaScript, functions are first-class objects. They can be assigned to variables, passed as arguments, and have properties and methods.
   - **Example:**
     ```javascript
     function greet(name) {
       return `Hello, ${name}!`;
     }
     const sayHello = greet;
     console.log(sayHello("Bob")); // Output: Hello, Bob!
     ```

4. **Dates**

   - **Description:** The `Date` object is used to work with dates and times. It provides methods to get and set the year, month, day, hour, minute, second, and millisecond of a date.
   - **Example:**
     ```javascript
     const now = new Date();
     console.log(now); // Outputs the current date and time
     ```

5. **Regular Expressions (RegExp)**

   - **Description:** Used for pattern matching within strings. Regular expressions define search patterns that can be used for string matching and manipulation.
   - **Example:**
     ```javascript
     const regex = /hello/i;
     console.log(regex.test("Hello World")); // Output: true
     ```

6. **Maps**

   - **Description:** A `Map` object holds key-value pairs where keys can be of any type. Unlike regular objects, `Maps` maintain the insertion order of keys.
   - **Example:**
     ```javascript
     const map = new Map();
     map.set("name", "Alice");
     map.set(1, "one");
     console.log(map.get("name")); // Output: Alice
     ```

7. **Sets**

   - **Description:** A `Set` object lets you store unique values of any type, whether primitive values or object references.
   - **Example:**
     ```javascript
     const set = new Set([1, 2, 3, 2, 1]);
     console.log(set); // Output: Set {1, 2, 3}
     ```

8. **WeakMap**

   - **Description:** Similar to `Map`, but keys must be objects, and `WeakMap` holds weak references to these keys, allowing for garbage collection if there are no other references to the key objects.
   - **Example:**
     ```javascript
     const weakMap = new WeakMap();
     let obj = {};
     weakMap.set(obj, "value");
     obj = null; // The object can now be garbage collected
     ```

9. **WeakSet**

   - **Description:** Similar to `Set`, but can only contain objects and holds weak references to them. This allows objects within a `WeakSet` to be garbage collected if there are no other references.
   - **Example:**
     ```javascript
     const weakSet = new WeakSet();
     let obj = {};
     weakSet.add(obj);
     obj = null; // The object can now be garbage collected
     ```

10. **Typed Arrays**
    - **Description:** Provide a way to handle binary data in JavaScript. Examples include `Int8Array`, `Uint8Array`, `Float32Array`, etc., which are useful for tasks like manipulating raw data buffers.
    - **Example:**
      ```javascript
      const buffer = new ArrayBuffer(16);
      const int32View = new Int32Array(buffer);
      int32View[1] = 42;
      console.log(int32View); // Output: Int32Array [0, 42, 0, 0]
      ```

## Key Characteristics of Non-Primitive Types

- **Mutability:** Non-primitive types are mutable, meaning their content can be changed after creation. For example, you can add, remove, or modify properties of an object.

  ```javascript
  const obj = { a: 1 };
  obj.b = 2; // Now obj is { a: 1, b: 2 }
  ```

- **Reference Behavior:** When you assign a non-primitive type to a variable, you're assigning a reference to the same object, not a copy. This means changes through one reference affect all references.

  ```javascript
  const obj1 = { a: 1 };
  const obj2 = obj1;
  obj2.a = 2;
  console.log(obj1.a); // Output: 2
  ```

- **Methods and Properties:** Non-primitive types often come with built-in methods and properties that allow for more complex operations. For example, arrays have methods like `push`, `pop`, `map`, and `filter`.

  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // Output: [1, 2, 3, 4]
  ```

## When to Use Non-Primitive Types

- **Storing Collections:** Use arrays or objects to store lists or key-value pairs of data.
- **Complex Data Structures:** Utilize maps, sets, or custom objects to model real-world entities and relationships.
- **Functional Programming:** Leverage functions as first-class objects to pass them around as arguments, return values, or assign them to variables.
- **Data Manipulation:** Use specialized objects like `Date` and `RegExp` for handling specific types of data.

## Conclusion

Non-primitive data types in JavaScript provide the flexibility and functionality needed to handle complex data and operations. They are foundational to building applications, enabling developers to create dynamic and interactive web experiences. Understanding how these types work, their characteristics, and when to use them is crucial for mastering JavaScript programming.
