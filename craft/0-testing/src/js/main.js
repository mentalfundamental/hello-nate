let priceElem = document.querySelector('#num');
let newPriceElem = document.querySelector('#new-price');

priceElem.addEventListener('keyup', getNewPrice);

function getNewPrice () {
    let price = priceElem.value;
    let newPrice = 0;
    if (price > 0 && price < 200) {
        newPrice = Math.round(price * 2)
        newPriceElem.innerHTML = newPrice;
    }

    else if (price >= 200) {
        newPrice = Math.round(price * 1.75);
        newPriceElem.innerHTML = newPrice;
    }
}

