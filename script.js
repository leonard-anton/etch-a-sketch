const container = document.querySelector(".container");

const changeSizeButton = document.querySelector(".changeSizeButton")

changeSizeButton.addEventListener("click", () => {
    let count = prompt("Enter grid size (max 100)");
    let pixelCount = Math.min(count, 100);
    deleteGrid();
    createGrid(pixelCount);
})

let isDrawing = false;
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

function createGrid(pixelCount) {

    squareSize = 600 / pixelCount;
    container.style.width = `${pixelCount * (squareSize + 2)}px`;
    for (let i = 1; i <= pixelCount * pixelCount; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    draw();
}

function draw() {
    const squares = container.querySelectorAll("div");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (isDrawing)
                square.style.backgroundColor = "black";
        })

        square.addEventListener("mousedown", () => square.style.backgroundColor = "black");
    })
}


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid(16);

