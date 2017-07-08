require('./reset.css');
require('./styles.css');

import { FullImageModal } from './modal/modal';

const modal = new FullImageModal('.j-modal-container');
const galleryItems = document.getElementsByClassName('j-gallery-item');

for (let galleryItem of galleryItems) {
  galleryItem.addEventListener('click', (e) => {
    modal.open(e.currentTarget.getAttribute('data-src'));
  })
}