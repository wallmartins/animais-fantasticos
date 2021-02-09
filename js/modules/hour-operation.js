export default function initHourOperation() {
  const operation = document.querySelector('[data-weak]');
  const dayWeak = operation.dataset.weak.split(',').map(Number);
  const scheduleWeak = operation.dataset.schedule.split(',').map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const scheduleNow = dateNow.getHours();

  const openDay = dayWeak.indexOf(dayNow) !== -1;

  const scheduleOpen = scheduleNow >= scheduleWeak[0] && scheduleNow < scheduleWeak[1];

  if (openDay && scheduleOpen) {
    operation.classList.add('open');
  }
}
