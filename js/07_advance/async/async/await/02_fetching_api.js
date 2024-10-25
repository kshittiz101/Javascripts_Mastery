const URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
let content = document.querySelector('.content');

const getCat = async () => {
  console.log('getting data');

  // Fetch the data from the API
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();

  console.log(data); // Logs the array of cat objects

  // Clear the content before adding new images
  content.innerHTML = '';

  // Iterate through the data array
  for (let i = 0; i < data.length; i++) {
    // Create a container for each cat image
    let container = document.createElement('div');
    container.classList.add('image__container');

    // Create an img element for the cat image
    let img = document.createElement('img');
    img.setAttribute('src', data[i].url);
    img.setAttribute('alt', `Cat Image ${i + 1}`);

    // Create a p element for the cat ID
    let id = document.createElement('p');
    id.classList.add('title');
    id.textContent = `Cat ID: ${data[i].id}`;

    // Append the img and id to the container
    container.appendChild(img);
    container.appendChild(id);

    // Append the container to the content div
    content.appendChild(container);
  }
};

getCat();
