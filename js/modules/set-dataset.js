export default function initDataset () {
  const sections = document.querySelectorAll('.animais-descricao section');

  sections.forEach((item, index) => {
    if(index%2 === 0) {
      item.dataset.anime = 'show-right';
    } else {
      item.dataset.anime = 'show-down';
    }
});
}