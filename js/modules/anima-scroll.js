export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // get distance on each object in relation to the top of the website
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offSet: Math.floor(offSet - this.windowMetade),
      };
    });
  }

  // checks the distance on each object in relation to the scroll of the website
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offSet) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove the event animation scroll
  stop() {
    window.remove('scroll', this.checkDistance);
  }
}
