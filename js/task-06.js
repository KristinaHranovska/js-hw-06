// const inputValidator = document.querySelector('#validation-input');

// const validator = (event) => {
//     if (inputValidator.dataset.length > event.currentTarget.value.length || inputValidator.dataset.length < event.currentTarget.value.length) {
//         inputValidator.classList.add("invalid");
//         inputValidator.classList.remove("valid");
//     } else if (Number(inputValidator.dataset.length) === event.currentTarget.value.length) {
//         inputValidator.classList.remove('invalid')
//         inputValidator.classList.add("valid");
//     }
// }

// inputValidator.addEventListener('blur', validator);

const inputValidator = document.querySelector('#validation-input');

const toggleValidationClass = (isValid) => {
    inputValidator.classList.toggle("valid", isValid);
    inputValidator.classList.toggle("invalid", !isValid);
}

const validator = (event) => {
    const isValid = event.currentTarget.value.length === parseInt(inputValidator.dataset.length);
    toggleValidationClass(isValid);
}

inputValidator.addEventListener('blur', validator);
