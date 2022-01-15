// Navbar
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

// puzzles
const cube = document.querySelector('.cube');
const priceRange = document.querySelector('.price');
const brand = document.querySelector('.brand');
const btn = document.querySelector('#search');

var cubeType = 'cube';
cube.addEventListener('change', () => {
  cubeType = cube.value;
})

var cubePrice = 'price';
priceRange.addEventListener('change', () => {
  cubePrice = priceRange.value;
})

var cubeBrand = 'brand';
brand.addEventListener('change', () => {
  cubeBrand = brand.value;
})



function displayCubes(cubeType, cubeBrand, cubePrice) {
    //console.log(cubePrice);
   try{
    let cost = cubePrice.split('-');
    cubeData[cubeType][cubeBrand].filter(i => {
      if(i.price >= cost[0] && i.price <= cost[1]) {
        console.log(i);
        displayCard(i.link, i.name, i.price, i.desc)
      }
    });
   } catch(err) {
       alert('PLease enter Cube, Price and Brand');
       console.log(err);
   }
  }

  function displayAllCubes() {
    for(let i in cubeData) {
      //console.log(i)

      for(let j in cubeData[i]) {
        //console.log(j);

        cubeData[i][j].map(p => displayCard(p.link, p.name, p.price, p.desc))
      }
    }
  }

  search.addEventListener('click', () => {
      document.querySelector('.main-container').innerHTML = '';
    displayCubes(cubeType, cubeBrand, cubePrice)
   });

   window.onload = displayAllCubes();