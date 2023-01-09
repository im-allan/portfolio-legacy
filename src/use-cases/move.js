// init Gsap
gsap.registerPlugin(ScrollTrigger);
import { gsap, ScrollTrigger } from "gsap/all";

export const move = () => {
    // Entry Timeline
    const mainScene = gsap.timeline({
        // This code is wrong. it doesn't work properly
        scrollTrigger: {
            trigger: ".entry",
            scrub: true,
            pin: true,
            start: "center center",
            end: "bottom 0",
            id: "Entry",
        }
    });

    mainScene
        .fromTo(".backform", 3, {
            opacity: "0",
        },
            {
                opacity: "1",
            })
        .fromTo(
            ".entry__table-stand",
            5,
            {
                autoAlpha: 0,
                left: "-100%",
                top: "20%",
                transform: "rotate(0deg)",
                xPercent: 100
            },
            {
                autoAlpha: 1,
                left: "-45%",
                top: "50%",
                transform: "rotate(-5deg)",
                xPercent: 25

            }
        )

}