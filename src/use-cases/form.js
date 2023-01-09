import { gsap } from "gsap/all";
import { sndMail } from "./mail";
import { wordCount } from "./count";
export const formUtils = () => {

    const containers = document.querySelectorAll(".input__container");
    const form = document.querySelector("#contact__form");

    const tl = gsap.timeline({
        defaults: {
            duration: 1
        }
    });

    const start =
        "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
    const end =
        "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

    containers.forEach(container => {
        const input = container.querySelector(".inputs");
        const line = container.querySelector(".elastic__line");
        const placeholder = container.querySelector(".placeholder");
        const textarea = container.querySelector(".input__message");

        input.addEventListener("focus", () => {
            if (!input.value) {
                tl.fromTo(
                    line,
                    {
                        attr: {
                            d: start
                        }
                    },
                    {
                        attr: {
                            d: end
                        },
                        ease: "Power2.easeOut",
                        duration: 0.75
                    });
                tl.to(
                    line,
                    {
                        attr: {
                            d: start
                        },

                        ease: "elastic.out(3,0.5)"
                    },

                    "<50%");

                tl.to(
                    placeholder,
                    {
                        top: -10,
                        left: 0,
                        scale: 0.7,
                        duration: 0.5,
                        transition: 0.2,
                        ease: "Power2.easeOut"
                    },
                    "<15%");

                if (textarea) {
                    tl.addPause('>', gsap.delayedCall, [.01, () => tl.play()])
                    tl.to(
                        '.input__message',
                        {
                            top: -10,
                            height: "80px",
                            duration: .5,
                            transition: 0.5,
                            ease: "Power2.easeOut"
                        },
                        "<100%"
                    );
                }
            }
        });
    });

    form.addEventListener("click", () => {
        containers.forEach(container => {
            const input = container.querySelector(".inputs");
            const textarea = container.querySelector(".input__message");
            const line = container.querySelector(".elastic__line");
            const placeholder = container.querySelector(".placeholder");
            if (document.activeElement !== input) {
                if (!input.value) {
                    if (textarea) {
                        tl.to(
                            textarea,
                            {
                                height: "50px",
                                top: 0,
                                duration: 0.5,
                                transition: 0.5,
                                ease: "Power2.easeOut"
                            }
                        )
                    }
                    gsap.to(placeholder, {
                        top: 0,
                        left: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "Power2.easeOut"
                    });
                }

            }
            input.addEventListener("input", e => {
                if (e.target.id === "input__name") {
                    let inputText = e.target.value;
                    if (inputText.trim().length > 2) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }
                if (e.target.id === "input__email") {
                    let valid = validateEmail(e.target.value);
                    if (valid) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }

                if (e.target.id === "input__message") {
                    wordCount();
                    let inputText = e.target.value;
                    if (inputText.trim().length > 10) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }
            });
        });
    });

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function colorize(color, line, placeholder) {
        gsap.to(line, {
            stroke: color,
            duration: 0.75
        });

        gsap.to(placeholder, {
            color: color,
            duration: 0.75
        });

    }
    const tl3 = gsap.timeline({
        defaults: {
            duration: 0.75,
            ease: "Power2.easeOut"
        }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        let textarea = document.querySelector('#input__message');
        if (textarea.value.trim().length > 10) {
            tl3.to(".contact__right, .contact__left", {
                y: 30,
                opacity: 0,
                display: "none",
                pointerEvents: "none"
            });

            tl3.to(
                "form",
                {
                    scale: 0.9,
                    gridTemplateColumns: "1fr",
                },

                "<");

            tl3.fromTo(
                ".submitted",
                {
                    display: "none",
                    y: 30
                },

                {
                    display: "grid",
                    y: 0
                });

            document.querySelector('.entry__table-stand').style.display = "none";
        } else {
            return false;
        }
    });
}

