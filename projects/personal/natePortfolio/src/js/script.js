let projects = document.querySelector('#options-box ul li:first-child a');
let transitioner = document.querySelector('#cover');

projects.addEventListener('click', transitionEvent);

function transitionEvent() {
    transitioner.style.animation = 'slidein 4s ease-in-out forwards';
    setTimeout(() => {
        transitioner.style.animation = 'none';
    }, 4050)
}