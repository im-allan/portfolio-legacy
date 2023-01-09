export const sndMail = () => {
    const form = document.querySelector('#contact__form');
    const textarea = document.querySelector('#input__message');
    form.addEventListener('submit', () => {
        if (textarea.value.trim().length > 10) {
            const formData = new FormData(form),
                url = 'https://formsubmit.co/4625de8550c815d89aa463b5c025e24e';
            fetch(
                url,
                {
                    method: 'POST',
                    body: formData
                }
            )
            console.log('Correo enviado');
        } else
            console.log('Correo no enviado');
        // return false;
    })
}