// setTimeout with argument
function greeting(name) {
  console.log('Good evening from ', name)
}

setTimeout(greeting, 2000, 'Kshittiz')
// arrow function
setTimeout(
  (name) => {
    console.log(`hello from async ${name}`)
  },
  3000,
  'kc'
)

// Anonymous Function as Callback
setTimeout(
  function (name) {
    console.log(`hello from anonymous from ${name}`)
  },
  5000,
  'kshittiz'
)
