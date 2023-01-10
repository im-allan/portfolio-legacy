gsap.registerPlugin(ScrollTrigger);
import { gsap, ScrollTrigger } from "gsap/all";

export const knowledge = () => {
    window.addEventListener('scroll', () => {
        const container = document.querySelector('.knowledge__packaging');
        let revealTop = container.getBoundingClientRect().top;
        console.log(revealTop);
        if (revealTop < 400) {
            const reveal = gsap.utils.toArray('.revealed');
            reveal.forEach((text, i) => {
                ScrollTrigger.create({
                    trigger: text,
                    toggleClass: 'actived',
                    start: "top 90%",
                    end: "top 20%",
                })
            })

            const images = gsap.utils.toArray('img');
            console.log(images);
            images.forEach((img, i) => {
                ScrollTrigger.create({
                    trigger: img,
                    toggleClass: 'actived',
                    start: "top 90%",
                    end: "top 20%",
                })
            })
        }
    })
}