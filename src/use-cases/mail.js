export const sndMail = () => {
    const form = document.querySelector('#contact__form');
    const textarea = document.querySelector('#input__message');
    form.addEventListener('submit', () => {
        if (textarea.value.trim().length > 10) {
            const formData = new FormData(form),
                url = 'https://formsubmit.co/al.quirozsilva@gmail.com';
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