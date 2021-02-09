export default function initAnimaNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
      const total = +number.innerText;

      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;

        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutantion(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector('.numbers');
  observer = new MutationObserver(handleMutantion);

  observer.observe(observerTarget, { attributes: true });
}
