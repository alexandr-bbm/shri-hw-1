require('./modal.css');

const TRANSITION_DURATION = 300; // завязано на css.

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

  open(src) {
    this.imgEl.setAttribute('src', src);
    this.bodyEl.classList.add('body_no-scroll');
    this.containerEl.classList.remove('modal-container_hidden');
    this.containerEl.classList.add('modal-container_transparent');
  }

  close() {
    this.bodyEl.classList.remove('body_no-scroll');
    this.containerEl.classList.remove('modal-container_transparent');
    setTimeout(() => {
      this.containerEl.classList.add('modal-container_hidden');
      this.imgEl.setAttribute('src', '');
    }, TRANSITION_DURATION)
  }
}