const container = document.querySelector(".container");

const changeSizeButton = document.querySelector(".changeSizeButton")

createGrid(16);

changeSizeButton.addEventListener("click", () => {
    let count = prompt("Enter grid size (max 100)");
    let size = count;
    deleteGrid();
    createGrid(size);
})

function createGrid(size) {
    for (let i = 1; i <= size * size; i++) {
        const elem = document.createElement("div");
        elem.addEventListener("mouseover", () => elem.style.backgroundColor = "black");
        container.appendChild(elem);
    }
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

