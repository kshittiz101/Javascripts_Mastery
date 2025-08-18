// synchronous programming
// in synchronous programming -> one tasks should complete to jump into next tasks

// Characteristics:
//     - Blocking: Each operation must finish before the next starts.
//     - Simpler to write and reason about since execution is linear.
//     - Can cause delays if tasks are slow (e.g., heavy computations or I/O).

// example
function syncDemo() {
  console.log("task -1 ");
  console.log("task -2 ");

  for (let i = 1; i < 400000; i++) {
    console.log(`task counter: ${i}`);
  }
  console.log("task -3 ");
}

syncDemo();

// When to Use:
//     - Simple scripts or tasks that are quick and CPU-bound (e.g., calculations, string manipulations).
//     - When tasks must follow a strict order and don’t involve waiting for external resources.
