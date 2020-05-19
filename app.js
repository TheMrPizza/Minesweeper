import Block from './mineBlockModel.js';
import BlockController from './blockController.js';

const ROWS = 9;
const COLS = 9;
const MINES_COUNT = 10;

function initBlocks() {
    const gameElement = document.getElementById("game");
    const mines = initMinesIndexes();
    for (let i = 0; i < COLS; i++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row center";

        for (let j = 0; j < ROWS; j++) {
            // const block = new Block(COLS * i + j);
            const block = new BlockController();
            rowElement.appendChild(block.init());
        }

        gameElement.appendChild(rowElement);
    }
}

function initMinesIndexes() {
    const options = [...Array(COLS * ROWS).keys()];
    const shuffled = options.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, MINES_COUNT);
}

window.onload = () => {
    initBlocks();
}