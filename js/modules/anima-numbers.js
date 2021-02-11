export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind the this object callback in the mutation
    this.handleMutantion = this.handleMutantion.bind(this);
  }

  // receive dom element with number in your text and increment from 0 up to your total
  static incrementNumber(number) {
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
  }

  // active increment number for each selected number from dom
  animateNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }

  // function that occurs when a mutation occurs
  handleMutantion(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  // add the mutationObserver to verify when the class active is add in element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutantion);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
