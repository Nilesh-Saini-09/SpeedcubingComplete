// selectors
const navbar = document.querySelector('.nav');

const toggle = document.querySelector('.toggle-collapse');


// Toggle navbar function
const toggleNav = () => {
    navbar.classList.toggle('collapse');
}





// Event Listeners
toggle.addEventListener('click', toggleNav);