import initAnimaNumbers from './anima-numbers.js';

export default function initFetchAnimals() {
  function createAnimals(animal) {
    const div = document.createElement('div');
    div.classList.add('numbers-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      const numbersGrid = document.querySelector('.numbers-grid');

      animalsJson.forEach((animal) => {
        const divAnimal = createAnimals(animal);
        numbersGrid.appendChild(divAnimal);
      });

      initAnimaNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimals('./js/animalApi.json');
}
