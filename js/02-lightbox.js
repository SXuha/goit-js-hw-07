import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');
galleryElement.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  function createGalleryMarkup(gallery) {
    return gallery
    .map((el) => {
       return  `<li><a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
        </a></li>`;
}).join(''); 
  }
console.log(galleryElement);