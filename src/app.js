import html from './app.html?raw';
import $ from 'jquery';
import { atom } from './use-cases/atom';
import { smooth } from './use-cases/lenis';
import { renderLoader } from './use-cases/loader';
import { reveal } from './use-cases/reveal';
import { move } from './use-cases/move';
import { formUtils } from './use-cases/form';
import { onKeyup } from './use-cases/onkeyup';
import { sndMail } from './use-cases/mail';
import { showDemo } from './use-cases/scrollText';
import { media } from './use-cases/media';
import { onclick } from './use-cases/onclick';
import { knowledge } from './use-cases/knowledge';
import { color } from './use-cases/color';
import { lateral } from './use-cases/lateral';


export const App = (elementId) => {

    (() => {
        const app = document.querySelector(elementId);
        app.innerHTML = html;
        $(window).on('beforeunload', function () {
            $(window).scrollTop(0);
        });
        $(document).ready(function () {
            $(this).scrollTop(0);
        });
        // renderLoader();
        atom();
        reveal();
        knowledge();
        lateral();
        if (!(window.matchMedia("( max-width: 900px )").matches)) {
            smooth();
            showDemo();
            move();
            onclick();
            color();
        }
        onKeyup();
        media();
        sndMail();
        formUtils();


    })();

}