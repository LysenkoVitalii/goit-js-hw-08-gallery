const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const galleryBody = [...galleryItems].map(function(galleryItem) {
  // create img
  const img = document.createElement("img");
  img.setAttribute('src', galleryItem.preview);
  img.setAttribute('data-source', galleryItem.original);
  img.setAttribute('alt', galleryItem.description);
  img.classList.add("gallery__image");
  // create a
  const a = document.createElement("a");
  a.setAttribute("href", galleryItem.original)
  a.classList.add("gallery__link");
  // create li
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  // create gallery item html structure
  li.appendChild(a.appendChild(img));
  return li.outerHTML;
}).join("");

const galleryContainer = document.querySelector('.gallery.js-gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryBody);

let modalContainer = document.querySelector(".lightbox");
let modalImage = document.querySelector(".lightbox__image");

    
galleryContainer.addEventListener('click', function(event){
  let galleryItem = event.target;
  if (galleryItem.matches(".gallery__image")) {
    modalImage.setAttribute('src', galleryItem.dataset.source);
    modalImage.setAttribute('alt', galleryItem.dataset.desciption);
    modalContainer.classList.add('is-open');
  }
});

// Close modal
const modalCloseButton = document.querySelector('.lightbox__button');
modalCloseButton.addEventListener('click', function (event) {
  modalContainer.classList.remove('is-open');
  modalImage.setAttribute('src', '');
});

const modalOverlay = document.querySelector('.lightbox__overlay');
modalOverlay.addEventListener('click', function (event) {
  modalContainer.classList.remove('is-open');
  modalImage.setAttribute('src', '');
});

// Esc
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case "ArrowRight":
      console.log("ArrowRight");
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      break;
    case "Escape": 
      modalContainer.classList.remove('is-open');
      modalImage.setAttribute('src', '');
      break;
  }
});



