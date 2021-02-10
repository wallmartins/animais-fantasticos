import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/animation-accordion.js';
import TabNav from './modules/animation-tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import initDataset from './modules/set-dataset.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHourOperation from './modules/hour-operation.js';
import initFetchAnimals from './modules/animals-fetch.js';
import initFetchBitcoin from './modules/bitcoin-fetch.js';
import initAnimationScroll from './modules/animation-scroll.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

initDataset();
initDropdownMenu();
initMenuMobile();
initHourOperation();
initFetchAnimals();
initFetchBitcoin();
initAnimationScroll();
