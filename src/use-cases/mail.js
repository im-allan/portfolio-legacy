export const sndMail = () => {
    const form = document.querySelector('#contact__form');
    const textarea = document.querySelector('#input__message');
    form.addEventListener('submit', () => {
        if (textarea.value.trim().length > 10) {
            const formData = new FormData(form),
                url = 'https://formsubmit.co/367e34956aec055cf16871d07d6fbfb7';
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