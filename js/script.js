import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/animation-accordion.js';
import TabNav from './modules/animation-tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import initDataset from './modules/set-dataset.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initHourOperation from './modules/hour-operation.js';
import fetchAnimals from './modules/animals-fetch.js';
import fetchBitcoin from './modules/bitcoin-fetch.js';
import AnimaScroll from './modules/anima-scroll.js';

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

fetchAnimals('js/animalApi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const animateScroll = new AnimaScroll('[data-anime="scroll"]');
animateScroll.init();
