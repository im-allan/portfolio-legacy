export const reveal = () => {
    /**
     * Esta función permite dar efecto a navbar, si supera x límite cambia su tamaño
     * @param scroll
     */
    window.onload = () => {
        window.onscroll = () => {
            let scrollTop = window.window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollTop > 44) {
                document.querySelector('#navbar').classList.add('scrolled');
            } else {
                document.querySelector('#navbar').classList.remove('scrolled');
            };
        };
    };

    const revealTrigger = (rev) => {
        for (let i = 0; i < rev.length; i++) {
            let windowHeight = window.innerHeight,
                revealTop = rev[i].getBoundingClientRect().top,
                revealBot = rev[i].getBoundingClientRect().bottom,
                revealPoint = 160;
            if (revealTop < windowHeight - revealPoint) {
                rev[i].classList.add('active');
            } else {

                rev[i].classList.remove('active');
            }
            if (rev[i].id != 'reveal__top') {
                if (revealBot < windowHeight - revealPoint) {
                    rev[i].classList.remove('active');
                }
            }
        };
    };

    /**
     * Detecta si se realizó scroll en el DOM, verifica si los elementos
     * se encuentran en el viewport y realiza acción.
     * @event {scroll} detecta scroll
     */

    window.addEventListener('scroll', () => {
        let revealL = document.querySelectorAll('#reveal__left'),
            // revealT = document.querySelectorAll('#reveal__top'),
            revealTH = document.querySelectorAll('#reveal__top--hidden'),
            revealR = document.querySelectorAll('#reveal__right');
        // revealTrigger(revealT);
        revealTrigger(revealL);
        revealTrigger(revealR);
        revealTrigger(revealTH);

    });
}