import $ from "jquery"

export const parallaxScroll = () => {

    let scrollPoint;
    let rect;

    const parallax = () => {
        scrollPoint = document.documentElement.scrollTop + (window.innerHeight / 2);

        let elem = document.querySelectorAll('.items');

        elem.forEach(canva => {
            let parentRect = canva.offsetParent && canva.offsetParent.getBoundingClientRect() || { top: 0, left: 0 },
                elemRect = canva.getBoundingClientRect().top;
            rect = elemRect - parentRect.top;
            if ((window.innerHeight / 2) > rect) {

                $(canva).find('.wrapper').animate({
                    scrollTop: document.documentElement.scrollTop / 3
                }, 0);
            } else if (scrollPoint > rect) {

                $(canva).find('.wrapper').animate({
                    scrollTop: (scrollPoint - rect) / 3
                }, 0);
            }
        });
    }

    document.addEventListener('scroll', () => {
        parallax();
    });

}

export const parallaxMouse = () => {

    const parallax = document.querySelector('#knowledge');
    const back = document.querySelector('#back__layer');

    const sBack = 400;

    parallax.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;
        back.style.transform = `
        translate(
            ${x / sBack}rem,
            ${y / sBack}rem
        )
        `;
    });
}
