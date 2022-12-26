export const renderLoader = () => {
    window.addEventListener('load', () => {
        const container__loader = document.querySelector(".container__loader");
        const scroll__bar = document.body;
        scroll__bar.style.overflow = "hidden";

        setTimeout(() => {
            scroll__bar.style.overflow = "visible";
            container__loader.style.opacity = 0;
            container__loader.style.visibility = "hidden";
            setTimeout(() => {
                container__loader.remove();
            }, 2000);
        }, 12000);
    });

    setTimeout(() => {
        document.getElementById('container__loader').insertAdjacentHTML("afterbegin", `<h2 class="loader__h2" id="loader__h2">Bienvenido</h2>`);

        const cheers = ['Bienvenido', 'Welcome', 'Bem-vindo', 'Accueillir'];
        let wordWrapper = document.getElementById('loader__h2'),
            wordWrapperContent = wordWrapper.innerHTML,
            addingWord = false,
            counter = 1;

        setInterval(function () {

            if (wordWrapperContent.length > 0 && !addingWord) {
                wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
                wordWrapperContent = wordWrapper.innerHTML;
            } else {
                addingWord = true;
            }
            if (addingWord) {
                if (wordWrapperContent.length < cheers[counter].length) {
                    wordWrapper.innerHTML = cheers[counter].slice(0, wordWrapperContent.length + 1);
                    wordWrapperContent = wordWrapper.innerHTML;
                } else {
                    if (counter < cheers.length) {
                        counter++
                    }
                    addingWord = false;
                }
            }
            if (counter == cheers.length) {
                counter = 0;
            }
        }, 150);
    }, 3500);
}