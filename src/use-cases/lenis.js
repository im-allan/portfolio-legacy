gsap.registerPlugin(ScrollTrigger);
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import Lenis from "@studio-freight/lenis";

export const smooth = () => {
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

    gsap.to(".projects", {
        scrollTrigger: {
            trigger: ".slide",
            start: "top-=" + window.innerHeight,
            end: "top+=100",
            // markers: true,
            scrub: 1
        },
        background: document.querySelector(".projects").dataset.backgroundTo,
        color: document.querySelector(".projects").dataset.colorTo,
        "--font-weight": 800
    });
    const headings = [...document.querySelectorAll(".projects__h2 .projects__span")];
    headings.forEach(heading => {
        gsap.to(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top-=" + window.innerWidth * 0.35,
                end: "top-=100",
                // markers: true,
                scrub: 2
            },

            immediateRender: false,
            x: 0
        });
    });
    const tlPin = gsap.timeline({
        scrollTrigger: {
            trigger: ".pin-section",
            start: "center center",
            end: "+=500%",
            pin: true,
            scrub: true
        }
    });

    tlPin.to('.pin-text', {
        scale: 2
    })
}