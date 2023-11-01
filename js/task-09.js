const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}