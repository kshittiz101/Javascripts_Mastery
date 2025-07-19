let url = 'https://fakestoreapi.com/products'

function getProducts() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(`Error: ${xhr.status}`) // HTTP error
      }
    }
    xhr.onerror = () => {
      reject('Network failure')
    }

    xhr.send()
  })
}
function displayProducts(products) {
  const container = document.getElementById('products-container')
  products.forEach((product) => {
    const div = document.createElement('div')
    div.className = 'product'
    div.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p><strong>Price:</strong> $${product.price}</p>
  `
    container.appendChild(div)
  })
}

// Using the promise
getProducts()
  .then((data) => {
    displayProducts(data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
