export const media = () => {
    if ((window.matchMedia("( max-width: 600px )").matches)) {
        document.querySelector('#contact__form').classList.remove('md');
        document.querySelector('#to__intros').setAttribute('href', '#intro');
        document.querySelector('#to__contact').setAttribute('href', '#contact');
        document.querySelector('#to__projects').setAttribute('href', '#projects');
    }
}