const l = v => console.log(v);
document.body.style.fontFamily = 'Verdana, sans-serif';
// create main container and append it to body

let divContainerCreate = document.createElement('div');
divContainerCreate.className = 'container';
document.body.appendChild(divContainerCreate);

// create div container of square shape and append it to main container

let shapeContainer = document.createElement('div');
shapeContainer.className = 'shape-container';
// styling
shapeContainer.style.border = '2vmin solid black'; 
shapeContainer.style.height = '25vmin';
shapeContainer.style.width = '50vmin';
shapeContainer.innerHTML = 'Click me';
shapeContainer.style.display = 'flex';
shapeContainer.style.justifyContent = 'center';
shapeContainer.style.alignItems = 'center';
shapeContainer.style.fontSize = '3vmin';
shapeContainer.style.textTransform = 'uppercase';

let divContainer = document.querySelector('.container');
divContainer.style.display = 'flex';
divContainer.style.fontSize = '3vmin';
divContainer.style.justifyContent = 'space-around';
divContainer.style.alignItems = 'center';
l(divContainer);
divContainer.appendChild(shapeContainer)

// create element to display instruction about choices

let instructionText = document.createElement('p');
instructionText.className = 'instruction-text';
instructionText.innerHTML = 'What color is the box?';
divContainer.insertBefore(instructionText, shapeContainer);

// create elements for choices and append them

// choice1
let choice_1 = document.createElement('p');
choice_1.className = 'choice-1';
choice_1.style.textTransform = 'uppercase';
choice_1.style.fontSize= '3vmin';
divContainer.appendChild(choice_1)

// choice2
let choice_2 = document.createElement('p');
choice_2.className = 'choice-2';
choice_2.style.textTransform = 'uppercase';
choice_2.style.fontSize= '3vmin';
divContainer.appendChild(choice_2);

let choice1 = document.querySelector('.choice-1');
let choice2 = document.querySelector('.choice-2');

// LOGIC

// define a function that when the shape-container element is clicked, it generates a random color using Math.random() from 10 choices

let generateColorResult = () => {
    let test = randomColor();
    l(test);
}

let generateColorResult2 = shapeContainer.addEventListener('click', generateColorResult);
let correctAns = '';

// define the function that generates a random color using Math.random - only 10 colors

function randomColor() {
    let n = Math.round(Math.random() * 10);
    if (n === 0) {
        shapeContainer.style.backgroundColor = 'Cyan';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'green';
        choice2.innerHTML = 'cyan';
        correctAns = shapeContainer.style.backgroundColor;
    }
    if (n === 1) {
        shapeContainer.style.backgroundColor = 'Red';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'red';
        choice2.innerHTML = 'pink';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 2) {
        shapeContainer.style.backgroundColor = 'Blue';
        shapeContainer.style.color = 'white';
        choice1.innerHTML = 'white';
        choice2.innerHTML = 'blue';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 3) {
        shapeContainer.style.backgroundColor = 'Green';
        shapeContainer.style.color = 'white';
        choice1.innerHTML = 'orange';
        choice2.innerHTML = 'green';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 4) {
        shapeContainer.style.backgroundColor = 'Violet';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'blue';
        choice2.innerHTML = 'violet';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 5) {
        shapeContainer.style.backgroundColor = 'Gray';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'gray';
        choice2.innerHTML = 'sky blue';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 6) {
        shapeContainer.style.backgroundColor = 'Yellow';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'yellow';
        choice2.innerHTML = 'black';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 7) {
        shapeContainer.style.backgroundColor = 'Black';
        shapeContainer.style.color = 'white';
        choice1.innerHTML = 'black';
        choice2.innerHTML = 'gray';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 8) {
        shapeContainer.style.backGroundColor = 'Orange';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'yellow';
        choice2.innerHTML = 'orange';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 9) {
        shapeContainer.style.backgroundColor = 'Lightblue';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'lightblue';
        choice2.innerHTML = 'gray';
        correctAns = shapeContainer.style.backgroundColor;
    };
    if (n === 10) {
        shapeContainer.style.backgroundColor = 'Pink';
        shapeContainer.style.color = 'black';
        choice1.innerHTML = 'pink';
        choice2.innerHTML = 'red';
        correctAns = shapeContainer.style.backgroundColor;
    };
    let evalResult;
    return evalResult = [choice1.innerHTML, choice2.innerHTML, correctAns];
}

// define an event that returns if the clicked choice is the correct answer

choice1.addEventListener('click', answerClick);
choice2.addEventListener('click', answerClick);

function answerClick(e) {
    if (e.target.innerHTML == correctAns) {
        alert('You are correct!');
    }
    if (e.target.innerHTML != correctAns) {
        alert('Wrong answer!');
    }
};