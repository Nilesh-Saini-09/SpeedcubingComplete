// selectors
const navbar = document.querySelector(".nav");

const toggle = document.querySelector(".toggle-collapse");

// Toggle navbar function
const toggleNav = () => {
  navbar.classList.toggle("collapse");
};

// main container blog display
var blogs = {
  1: {
    img: "url1",
    title: "title1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos aspernatur nihil alias fugit quibusdam autem dignissimos, inventore iure, eum maiores sunt non dicta reprehenderit expedita. Eos magnam consequatur alias.",
    date: "date",
  },

  2: {
    img: "url2",
    title: "title2",
    content:
      "Lorem2 ipsum2 dolor sit amet consectetur adipisicing elit. Aliquam eos aspernatur nihil alias fugit quibusdam autem dignissimos, inventore iure, eum maiores sunt non dicta reprehenderit expedita. Eos magnam consequatur alias.",
    date: "date",
  },

  3: {
    img: "url3",
    title: "title3",
    content:
      "Lorem3 ipsum3 dolor sit amet consectetur adipisicing elit. Aliquam eos aspernatur nihil alias fugit quibusdam autem dignissimos, inventore iure, eum maiores sunt non dicta reprehenderit expedita. Eos magnam consequatur alias.",
    date: "date",
  },
};

function simpleBox(t, c) {
  const box = document.createElement("div");
  box.className = "container";

  const image = document.createElement("div");
  image.className = "img";

  const content = document.createElement("div");
  content.className = "content";

  // const date = document.createElement('h5');
  // date.appendChild(document.createTextNode(d));

  const title = document.createElement("h2");
  title.appendChild(document.createTextNode(t));

  const article = document.createElement("p");
  article.appendChild(document.createTextNode(c));

  content.append(title, article);
  box.append(image, content);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(box);
}

for (let i in blogs) {
  simpleBox(blogs[i].title, blogs[i].content);
}

// Event Listeners
toggle.addEventListener("click", toggleNav);
