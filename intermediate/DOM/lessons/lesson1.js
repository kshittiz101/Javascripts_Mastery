// console.log(document.head)
// const header = document.getElementsByClassName('header')
// header.innerHTML = 'Hello from header'
// console.log(header)

// document.getElementsByClassName('header') returns an HTMLCollection, not a single element.
// You cannot use innerHTML directly on an HTMLCollection.

// solution
// const header = document.getElementsByClassName('header')

// if (header.length > 0) {
//   header[0].innerHTML = 'Hello from header'
// }

// or make id
// const header = document.getElementById('header')
// header.innerHTML = '<h1> This is hello from header </h1>'

const h2 = document.querySelector('h2')

h2.addEventListener('click', () => {
  h2.innerHTML = 'Now This will be change'
  h2.style.backgroundColor = 'red'
  h2.style.color = 'black'
  console.log(h2)
})
