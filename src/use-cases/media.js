export const media = () => {
    if ((window.matchMedia("( max-width: 600px )").matches)) {
        document.querySelector('#contact__form').classList.remove('md');
    }
}