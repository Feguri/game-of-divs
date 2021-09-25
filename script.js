// @ts-check

const startButton = document.getElementById('button');
const mainDiv = document.getElementById('contain');
const miniDivs = Array.from(document.getElementsByClassName('media-div'));
const getRandomNumber = n => Math.floor(Math.random() * n)

mainDiv.style.display = 'none';

function startGame () {
    startButton.style.display = 'none';
    mainDiv.style.display = 'flex';
}

startButton.addEventListener('click', startGame);
function getRandomColor () {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
  
function changeBg () {

for (let div of miniDivs) {
    const randColor = getRandomColor();
    const randColor2 = getRandomColor();
    let deg = getRandomNumber(360);
    const gradient = `linear-gradient(${deg}deg, ${randColor}, ${randColor2})`
    div.style.backgroundImage = gradient;
}

}

let currentSize = 100;
let currentWidth = 100;
let up = false;
function changeSize () {
if (up){
    currentSize += 10;
    currentWidth += 10;
    if (currentSize === 150){
        up = false;
    }

} else {
        currentSize -= 10;
        currentWidth -= 10;
        if (currentSize === 30){
        up = true;
        }
}

for (let div of miniDivs) {
    div.style.height = `${currentSize}px`;
    div.style.width = `${currentWidth}px`;
}

}

function changeBorder () {
let borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset',
'dotted dashed solid double'];

for (let div of miniDivs) {
div.style.borderRadius = `${getRandomNumber(100)}px`;
div.style.borderColor = `${getRandomColor()}`;
div.style.borderStyle = `${borderStyles[getRandomNumber(borderStyles.length)]}`;
}

}

let bordered = true;
function disappear () {
if (bordered){
    miniDivs[3].style.borderColor = '#000';
    bordered = false;
} else {
    miniDivs[3].style.borderColor = 'brown';
    bordered = true;
}
}

function changeOuterBorder () {
mainDiv.style.borderColor = getRandomColor();
}

function changeInnerBorder () {
const newColor = getRandomColor();
for (let miniDiv of miniDivs) {
    miniDiv.style.borderColor = newColor;
}
}

function changeFont () {
const fonts = ['monospace', 'georgia', 'courier new', 'times new roman', 'arial', 'brush script mt', 'verdana'];

    const randomFont = fonts[getRandomNumber(fonts.length)];
document.getElementsByTagName('h1')[0].style.fontFamily = randomFont;
document.getElementsByTagName('p')[0].style.fontFamily = randomFont;
}

function changeDivShape () {
for (let miniDiv of miniDivs) {
    miniDiv.style.borderRadius = `${getRandomNumber(40)}px`;
}
}

let currentThickness = 4;
let goingUp = true;
function changeBorderThickness () {
    if (goingUp) {
        currentThickness++;
        if (currentThickness === 10) {
            goingUp = false;
        }
    } else {
        currentThickness--;
        if (currentThickness === 1) {
            goingUp = true;
        }
    }
    for (let div of miniDivs) {
        div.style.borderWidth = `${currentThickness}px`;
    }

    mainDiv.style.borderWidth = `${currentThickness}px`;
}
startButton.addEventListener('click', startGame);
miniDivs[0].addEventListener('click', changeBg);
miniDivs[1].addEventListener('click', changeSize);
miniDivs[2].addEventListener('click', changeBorder);
miniDivs[3].addEventListener('click', disappear);
miniDivs[4].addEventListener('click', changeOuterBorder);
miniDivs[5].addEventListener('click', changeInnerBorder);
miniDivs[6].addEventListener('click', changeFont);
miniDivs[7].addEventListener('click', changeDivShape);