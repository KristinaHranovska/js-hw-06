const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const minusValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const plusValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

btnMinus.addEventListener('click', minusValue);
btnPlus.addEventListener('click', plusValue);