let burgerBtn = document.getElementById('burger-button');
let burgerView = document.getElementById('burger');
burgerBtn.addEventListener('click', burgerClick);

function burgerClick(e) {
    if (burgerView.style.display === 'none') {
        burgerView.style.display = 'flex';
    }
    else {
    burgerView.style.display = 'none';
    }
}