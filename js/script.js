import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/animation-accordion.js';
import TabNav from './modules/animation-tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import HourOperation from './modules/hour-operation.js';
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

const animateScroll = new AnimaScroll('[data-anime="scroll"]');
animateScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new HourOperation('[data-weak]', 'open');
operation.init();

fetchAnimals('js/animalApi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
