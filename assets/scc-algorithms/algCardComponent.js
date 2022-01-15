function algCard(image, algs) {
    const card = document.createElement('div');
    card.className = 'img-card card iCard-style3';
    
    const content = `
    <div class="card-content">
      <div class="card-image">
        <img src="${image}"/>
      </div>
      <div class="card-text">
        <p> ${algs[0]} </p>
        <p> ${algs[1]} </p>
      </div>
                              
    </div>
                          
    <div class="card-link">
      <a href="#" title="Video">
        <span>Youtube</span>
      </a>
    </div>
    `;
    
    card.innerHTML = content;
    
    const main = document.querySelector('.main-container');
  main.appendChild(card);
  // main.innerHTML = displayBox('title', 'text is written')
  }
  