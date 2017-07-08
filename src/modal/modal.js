require('./modal.css');

export class FullImageModal {
  /**
   * @param containerSelector {string} id контейнера модалки.
   */
  constructor(containerSelector) {
    this.initNodes(containerSelector);
    this.bindOutsideImageClick();
  }

  initNodes(containerSelector) {
    this.bodyEl = document.querySelector('body');
    this.containerEl = document.querySelector(containerSelector);
    this.imgEl = this.containerEl.querySelector('.j-gallery-modal__img');

    if (![this.bodyEl, this.containerEl, this.imgEl].every(Boolean)) {
      throw new Error;
    }
  }

  bindOutsideImageClick() {
    this.containerEl.addEventListener('click', (e) => {
      if (!this.imgEl.contains(e.target)) {
        this.close();
      }
    });
  }

  setImgSrc(src, srcset) {
    this.imgEl.setAttribute('src', src);
    this.imgEl.setAttribute('srcset', srcset);
  }

  open(src, srcset) {
    this.setImgSrc(src, srcset);
    this.bodyEl.classList.add('body_no-scroll');
    this.containerEl.classList.remove('modal-container_hidden');
  }

  close() {
    this.bodyEl.classList.remove('body_no-scroll');
    this.containerEl.classList.add('modal-container_hidden');
    this.setImgSrc('', '');
  }
}