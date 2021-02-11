export default class HourOperation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  dataOperation() {
    this.dayWeak = this.operation.dataset.weak.split(',').map(Number);
    this.scheduleWeak = this.operation.dataset.schedule.split(',').map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.scheduleNow = this.dateNow.getUTCHours() - 3;
  }

  itsOpen() {
    const openDay = this.dayWeak.indexOf(this.dayNow) !== -1;
    const scheduleOpen = this.scheduleNow >= this.scheduleWeak[0]
    && this.scheduleNow < this.scheduleWeak[1];

    return openDay && scheduleOpen;
  }

  activeOpen() {
    if (this.itsOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
