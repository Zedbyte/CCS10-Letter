const hamburger = document.querySelector('.hamburger');
const letter = document.querySelector('#letter');

const click = document.querySelector('.click');
const clickable = document.querySelector('.clickable');

const arrowMouse = document.querySelector('.arrow-down');
const Exercise = document.querySelector('#Exercise-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    letter.classList.toggle('active');

    click.classList.toggle('active');
    clickable.classList.toggle('active');

    arrowMouse.classList.toggle('active');

    Exercise.classList.toggle('active');
});

