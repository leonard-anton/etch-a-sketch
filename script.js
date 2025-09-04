const container = document.querySelector(".container");

let pxNum = 16;

for (let i = 1; i <= pxNum * pxNum; i++) {
    const elem = document.createElement("div");
    elem.addEventListener("mouseover", () => elem.style.backgroundColor = "black");
    container.appendChild(elem);
}

