const hamburger = document.querySelector('.hamburger');
const letter = document.querySelector('#letter');

const click = document.querySelector('.click');
const clickable = document.querySelector('.clickable');

const arrowMouse = document.querySelector('.arrow-down');
const Exercise = document.querySelector('#Exercise-container');

const wheel = document.querySelector('.wheel');

/* 
==========================
     .active class
==========================

Notes:
1. This is mainly used for adding .active classes when hamburger is clicked.

*/
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    letter.classList.toggle('active');

    click.classList.toggle('active');
    clickable.classList.toggle('active');

    arrowMouse.classList.toggle('active');

    Exercise.classList.toggle('active');

    wheel.classList.toggle('active');
});


/* 
==========================
     TYPING EFFECT
==========================

Notes:
1. This is mainly used for the typing effect of my webpage.
2. I used document.querySelector to target the classes that I want to use.
3. the text variables contains the texts that must be typed.
4. charIndex is the letter's position or index, it must start with 0 to get the first letter (Array rule).
5. the charIndex will continue to increment until the last letter. 

*/


const Intro = document.querySelector('.Intro');
const text = "CCS10 Summarized Activity 1";
let charIndex = 0;

function typeEffect() {
    Intro.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});

const desc = document.querySelector('.desc-download');
const textp = "Click to download the Narrative Report";

const nR= document.querySelector('.anchor');
const textA = "Narrative Report";

let charIndexp = 0;
let charIndexA = 0;

function typeEffectp() {
    desc.textContent += textp.charAt(charIndexp);
    charIndexp++;
    setTimeout(typeEffectp, 100);
}

function typeEffectA() {
    nR.textContent += textA.charAt(charIndexA);
    charIndexA++;
    setTimeout(typeEffectA, 100);
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffectp();
    typeEffectA();
});

