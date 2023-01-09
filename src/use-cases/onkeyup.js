export const onKeyup = () => {
    const input__name = document.querySelector('#input__name');
    const input__email = document.querySelector('#input__email');
    const input__message = document.querySelector('#input__message');
    input__name.addEventListener('input', (event) => {
        let name = document.querySelector("#span__name");
        name.innerHTML = event.target.value;
        if (name.innerHTML.length >= 11) {
            name.innerHTML += '<br>';
        }
    })
    input__email.addEventListener('input', (event) => {
        let email = document.querySelector("#span__email");
        email.innerHTML = event.target.value;
        if (email.innerHTML.length >= 12) {
            email.innerHTML += '<br>';
        }
    })
    input__message.addEventListener('input', (event) => {
        let message = document.querySelector("#span__message");
        message.innerHTML = event.target.value;
        if (message.innerHTML.length >= 8) {
            message.innerHTML += '<br>';
        }
    })
}