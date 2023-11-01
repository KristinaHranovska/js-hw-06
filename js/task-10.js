const numberValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = numberValue.value;

  if (numberValue.value >= Number(numberValue.min) && numberValue.value <= Number(numberValue.max)) {
    createBoxes(amount);
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {

    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxes.append(div);

    boxSize += 10;
  }
}

const destroyBoxes = () => boxes.innerHTML = '';

buttonDestroy.addEventListener('click', destroyBoxes);