let log = v => console.log(v);
let dir = v => console.dir(v);

let addButton = document.getElementById('add');
let menu = document.getElementById('menu');
let field = document.getElementById('field');

//addItem
addButton.addEventListener('click', addItem);
function addItem() {
    let newButtonsBox = document.createElement('div');
    newButtonsBox.className = 'buttons';
    let newItem = document.createElement('li');
    newItem.className = 'menu-item';
    let newItemText = document.createElement('p');
    newItemText.className = 'text';
    newItemText.innerHTML = field.value;
    let newCheckButton = document.createElement('span');
    newCheckButton.className = 'check';
    newCheckButton.innerHTML = '✓';
    let newDelButton = document.createElement('span');
    newDelButton.className = 'del';
    newDelButton.innerHTML = '✖';
    newItem.appendChild(newItemText);
    newItem.appendChild(newButtonsBox);
    newButtonsBox.appendChild(newCheckButton);
    newButtonsBox.appendChild(newDelButton);
    menu.appendChild(newItem);

    //delete item
    let del = document.getElementsByClassName('del');

    for (let item of del) {
        item.addEventListener('click', deleteItem);
    }
    
    function deleteItem(e) {
        e.path[2].style.display = 'none';
    }

    //mark complete
    let check = document.getElementsByClassName('check');

    for (let item of check) {
        item.addEventListener('click', markComplete);
    }

    function markComplete(e) {
        log(e);
        e.path[2].childNodes[0].style.textDecoration = 'line-through';
        e.path[2].style.backgroundColor = 'gray';
    }
}

