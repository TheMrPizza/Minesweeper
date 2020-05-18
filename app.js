const ROWS = 9;
const COLS = 9;

function initBlocks() {
    const rowElement = document.createElement("div");
    rowElement.className = "row center";
    const buttonElement = document.createElement("button");
    buttonElement.className = "block";

    const gameElement = document.getElementById("game");
    for (let i = 0; i < COLS; i++) {
        rowElement.appendChild(buttonElement.cloneNode(true));
    }

    for (let i = 0; i < ROWS; i++) {
        gameElement.appendChild(rowElement.cloneNode(true));
    }
}

window.onload = () => {
    initBlocks();
}