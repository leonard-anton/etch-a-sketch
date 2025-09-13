const container = document.querySelector(".container");

const changeSizeButton = document.querySelector(".changeSizeButton")
const blackBrushButton = document.querySelector(".blackBrushButton");
const randomColorsButton = document.querySelector(".randomColorsButton");
const eraserButton = document.querySelector(".eraserButton");


let currentColor = "black";

let isDrawing = false;
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

changeSizeButton.addEventListener("click", () => {
    let count = prompt("Enter grid size (max 100)");
    let pixelCount = Math.min(count, 100);
    deleteGrid();
    createGrid(pixelCount);
})

blackBrushButton.addEventListener("click", () => currentColor = "black");
randomColorsButton.addEventListener("click", () => currentColor = "random");
eraserButton.addEventListener("click", () => currentColor = "white");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(pixelCount) {

    squareSize = 600 / pixelCount;
    container.style.width = `${pixelCount * (squareSize + 2)}px`;
    for (let i = 1; i <= pixelCount * pixelCount; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("dragstart", (e) => e.preventDefault());

        container.appendChild(square);
    }
    draw();
}

function draw() {
    const squares = container.querySelectorAll("div");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (isDrawing)
                square.style.backgroundColor = currentColor === "random" ? getRandomColor() : currentColor;
        })

        square.addEventListener("mousedown", () => square.style.backgroundColor = currentColor === "random" ? getRandomColor() : currentColor);
    })
}


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid(16);

