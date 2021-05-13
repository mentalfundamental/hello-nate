//DOM elements
let wakeTimeElem = document.querySelector('#wake-time');
let sleepTimeElem = document.querySelector('#sleep-time');
let btn = document.querySelector('#btn');

//src variables
let wakeTime = 0;
let sleepTime = 0;

btn.addEventListener('click', sleepAt);

function sleepAt() {
    wakeTime = Number(wakeTimeElem.value);
    sleepTime = wakeTime + 17;
    if (sleepTime >= 24) {
        sleepTime = 0 + wakeTime - 7;
    }
    sleepTimeElem.innerHTML = sleepTime;    
};