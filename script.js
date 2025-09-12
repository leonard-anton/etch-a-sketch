const container = document.querySelector(".container");

const changeSizeButton = document.querySelector(".changeSizeButton")

changeSizeButton.addEventListener("click", () => {
    let count = prompt("Enter grid size (max 100)");
    let size = count;
    deleteGrid();
    createGrid(size);
})

let isDrawing = false;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        const square = document.createElement("div");
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

