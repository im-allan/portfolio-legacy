import html from './app.html?raw';
import { atom } from './use-cases/atom';
import { smooth } from './use-cases/lenis';
// import { renderLoader } from './use-cases/loader';
import { parallaxMouse, parallaxScroll } from './use-cases/parallax';
import { reveal } from './use-cases/reveal';
import { move } from './use-cases/move';
import { formUtils } from './use-cases/form';
import { onKeyup } from './use-cases/onkeyup';
// import { sndMail } from './use-cases/mail';
import { showDemo } from './use-cases/scrollText';
import { media } from './use-cases/media';



export const App = (elementId) => {

    (() => {
        const app = document.querySelector(elementId);
        app.innerHTML = html;
        // renderLoader();
        // parallaxMouse();

        parallaxScroll();
        atom();
        reveal();

        if (!(window.matchMedia("( max-width: 600px )").matches)) {
            smooth();
            showDemo();
            move();
        }
        onKeyup();
        media();
        // sndMail();
        formUtils();


    })();

}