import html from './app.html?raw';
import { atom } from './use-cases/atom';
import { smooth } from './use-cases/lenis';
import { renderLoader } from './use-cases/loader';
import { parallaxMouse, parallaxScroll } from './use-cases/parallax';
import { reveal } from './use-cases/reveal';

export const App = (elementId) => {

    (() => {
        const app = document.querySelector(elementId);
        app.innerHTML = html;
        // renderLoader();
        atom();
        smooth();
        parallaxScroll();
        // parallaxMouse();
        reveal();


    })();

}