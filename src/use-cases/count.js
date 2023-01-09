export const wordCount = () => {
    let txt = document.querySelector('#input__message'),
        count = document.querySelector('#total__span'),
        maxLeng = txt.getAttribute('maxlength');

    txt.oninput = function () {
        count.innerHTML = this.value.length;
        if (count.innerHTML == maxLeng) {
            count.style.color = '#CC0000';
            count.classList.add('StopWriting');

        } else {
            count.classList.remove('StopWriting');
            count.style.color = 'black';
        }
    }
}