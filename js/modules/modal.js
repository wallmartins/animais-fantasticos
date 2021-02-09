export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('active');
  }
  function outClick(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (buttonOpen && buttonClose && modalContainer) {
    buttonOpen.addEventListener('click', toggleModal);
    buttonClose.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', outClick);
  }
}
