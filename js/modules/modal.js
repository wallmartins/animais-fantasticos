export default class Modal {
  constructor(buttonOpen, buttonClose, modalContainer) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this to callback for reference the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outClick = this.outClick.bind(this);
  }

  // open or close modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // add toggle event to modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close modal to outside click
  outClick(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // add event to modal elements
  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outClick);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
