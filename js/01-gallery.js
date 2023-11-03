import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');
let instance;

function picTemplate(pic) {
    const { preview, original, description} = pic;
  
    return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }

  function picsTemplate(picsArr) {
    return picsArr.map(picTemplate).join('');
  }

  function renderPics(PicsArr) {
    const markup = picsTemplate(PicsArr);
    gallery.innerHTML = markup;;
  }
  
  renderPics(galleryItems);
// console.log(galleryItems);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();
if (e.target.nodeName !== 'IMG') {
    return;
}
const originalPath = e.target.dataset.source;

instance = basicLightbox.create(`
		<img width="1400" height="900" src="${originalPath}">
	`, {
    onShow: () => {
      document.addEventListener('keydown', onBasicLightboxElKeydown);
    },
onClose: () => {
  document.removeEventListener('keydown', onBasicLightboxElKeydown);
}
    
  });
  instance.show();
}

function onBasicLightboxElKeydown(e) {
if (e.code !== 'Escape') {
  return
}
instance.close();
console.log(1111);
}