import html from './app.html?raw';
import { renderLoader } from './use-cases/loader';

export const App = (elementId) => {

    (() => {
        const app = document.querySelector(elementId);
        app.innerHTML = html;
        renderLoader();

    })();

}