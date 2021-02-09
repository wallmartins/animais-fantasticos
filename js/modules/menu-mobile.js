import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  function openMenu() {
    menuButton.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, events, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    events.forEach((event) => menuButton.addEventListener(event, openMenu));
  }
}
