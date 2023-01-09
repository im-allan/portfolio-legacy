gsap.registerPlugin(ScrollTrigger);
import { gsap, ScrollTrigger } from "gsap/all";

export const showDemo = () => {
    document.scrollingElement.scrollTo(0, 0);
    console.log(gsap.utils.toArray('.lateral__text'));
    gsap.utils.toArray('.lateral__text').forEach((section, index) => {
        console.log('object');
        const w = section.querySelector('.move__wrapper');
        const [y, yEnd] = index % 2 ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0];
        gsap.fromTo(w, { y }, {
            y: yEnd,
            scrollTrigger: {
                trigger: section,
                scrub: 0.5
            }
        });
    });
};