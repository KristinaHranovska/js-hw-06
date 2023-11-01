const formLogin = document.querySelector('.login-form');

const sendUserInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (!login || !password) {
        alert('Please, fill in all fields before sending!');
    }

    console.log(`${form.elements.email.name}: ${login}`);
    console.log(`${form.elements.password.name}: ${password}`);

    formLogin.reset();
}

formLogin.addEventListener('submit', sendUserInfo);