import yolaBowser from 'yola-bowser';

window.addEventListener('DOMContentLoaded', () => {

  const checks = Object.keys(yolaBowser);
  const uiList = document.querySelector('#yolaBowserChecks');

  checks.forEach((check) => {
    const uiListItem = document.createElement('li');
    uiListItem.textContent = `${check}: ${yolaBowser[check]}`;
    uiListItem.style.color = yolaBowser[check] ? 'green' : 'red';
    uiList.appendChild(uiListItem);
  });
});
