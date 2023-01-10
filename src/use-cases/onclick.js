import Lenis from "@studio-freight/lenis";
export const onclick = () => {
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 0.9,
        infinite: false,
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    const contact = document.querySelector('#to__contact');
    contact.style.cursor = "pointer";
    contact.addEventListener('click', () => {
        lenis.scrollTo('#contact');
    });
    const intro = document.querySelector('#to__intros');
    intro.style.cursor = "pointer";
    intro.addEventListener('click', () => {
        lenis.scrollTo('#intro');
    });
    const projects = document.querySelector('#to__projects');
    projects.style.cursor = "pointer";
    projects.addEventListener('click', () => {
        lenis.scrollTo('#projects');
    });
    const knowledge = document.querySelector('#to__knowledge');
    knowledge.style.cursor = "pointer";
    knowledge.addEventListener('click', () => {
        lenis.scrollTo('#knowledge');
    });
}