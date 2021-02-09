import SmoothScroll from './modules/smooth-scroll.js';
import initAnimationScroll from './modules/animation-scroll.js';
import initAccordion from './modules/animation-accordion.js';
import initTabNav from './modules/animation-tab-nav.js';
import initDataset from './modules/set-dataset.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHourOperation from './modules/hour-operation.js';
import initFetchAnimals from './modules/animals-fetch.js';
import initFetchBitcoin from './modules/bitcoin-fetch.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

initAnimationScroll();
initAccordion();
initTabNav();
initDataset();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initHourOperation();
initFetchAnimals();
initFetchBitcoin();
