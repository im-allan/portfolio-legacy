export const scrollEffect = () => {

    const imgs = document.querySelectorAll('#knowledge__img');

    const checkImgs = () => {
        const triggerBottom = window.innerHeight / 6 * 4;

        imgs.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;

            if (imgTop < triggerBottom) {
                img.classList.add('show');
            } else {
                img.classList.remove('show');
            };
        });
    };

    window.addEventListener('scroll', checkImgs);
}