const title = document.querySelector('#title');
const grid = document.querySelector("#grid-container");

let gridRow = 16;

function init() {
    //title
    title.textContent = 'Etch-A-Sketch';

    createGrid();
}

function createGrid() {
    for (var i = 0; i < gridRow ** 2; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = i + 1;
        grid.append(box);
    }
}


grid.style.gridTemplateColumns = `repeat(${gridRow}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridRow}, 1fr)`;


init();
