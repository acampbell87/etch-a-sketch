const title = document.querySelector('#title');
const grid = document.querySelector("#grid-container");

let boxColor = "#2dedc9";
let gridRow = 25;

function init() {
    title.textContent = 'Etch-A-Sketch';

    createGrid();
}
function rowSize() {
    gridRow = prompt("How many rows in the grid?", "25");

    if (gridRow < 3 || gridRow > 100) {
        alert("Please enter a value between 2 and 100.");
        rowSize();
    }
    removeGrid();
    createGrid();
}
function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
function createGrid() {
    for (var i = 0; i < gridRow ** 2; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = i + 1;
        grid.append(box);

        grid.style.gridTemplateColumns = `repeat(${gridRow}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridRow}, 1fr)`;
    }
}

function color(e) {
    e.target.style.backgroundColor = boxColor;
}

function clearColor() {
    //selects all boxes
    var allBoxes = document.querySelectorAll("div.box");

    //sets color to default for each box
    allBoxes.forEach(function (coloredBox) {
        coloredBox.style.backgroundColor = "#e7ffe5";
    })

    //resets color back to default
    boxColor = "#2dedc9";
    grid.removeEventListener("mouseover", rainbow);
    grid.addEventListener("mouseover", color);
}

function rainbowColor() {
    grid.removeEventListener("mouseover", color);
    grid.addEventListener("mouseover", rainbow);
}
function rainbow (e) {
    boxColor = '#'+Math.random().toString(16).substr(-6);
    e.target.style.backgroundColor = boxColor;
}
function randomColor() {
    return num = Math.round(Math.random() * 255);
}

//Add all event listeners
grid.addEventListener("mouseover", color);

init();
