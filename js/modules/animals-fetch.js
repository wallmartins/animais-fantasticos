import AnimaNumbers from './anima-numbers.js';

export default function fetchAnimals(url, target) {
  // create content with  total animal information
  function createContent(animal) {
    const div = document.createElement('div');
    div.classList.add('numbers-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  // fill every animal no DOM
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createContent(animal);
    numbersGrid.appendChild(divAnimal);
  }

  // animate numbers of each animals
  function animateAnimalsNumbers() {
    const animaNumbers = new AnimaNumbers('[data-number]', '.numbers', 'ativo');
    animaNumbers.init();
  }

  // push animals through archive json and create every animal using createContent
  async function createAnimals() {
    try {
      // fetch, wait response and transform in json
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();

      // after transform json active function to fill and animate the numbers
      animalsJson.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
