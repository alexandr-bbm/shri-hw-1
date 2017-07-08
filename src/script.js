import LazyLoad from 'vanilla-lazyload/dist/lazyload.es2015';
import objectFitImages from 'object-fit-images';

import { FullImageModal } from './modal/modal';

import 'reset-css/reset.css';
import './styles.css';

new LazyLoad();
objectFitImages();

const modal = new FullImageModal('.j-modal-container');
const galleryItems = document.getElementsByClassName('j-gallery-item');

[...galleryItems].forEach(galleryItem => {
  galleryItem.addEventListener('click', (e) => {
    const src = e.currentTarget.getAttribute('data-src');
    const srcset = e.currentTarget.getAttribute('data-srcset');
    modal.open(src, srcset);
  })
});
