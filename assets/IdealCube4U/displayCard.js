const displayCard = (img, name, price, desc) => {
    const box = document.createElement('div');
    box.className = 'container';
  
    const image = document.createElement('div');
    image.className = 'img';
    image.innerHTML = `<img src='${img}' alt='Cube Image' />`;

    const content = document.createElement('div');
  content.className = 'content';

  const cubeName = document.createElement('h2');
  cubeName.appendChild(document.createTextNode(name));

  const cubePrice = document.createElement('h3');
  cubePrice.className = 'price';
  cubePrice.appendChild(document.createTextNode(`Rs. ${price}`));

  const description = document.createElement('p');
  description.appendChild(document.createTextNode(desc));

  content.append(cubeName, cubePrice, description);
  box.append(image, content);

  const mainContainer = document.querySelector('.main-container');
  mainContainer.appendChild(box);
}