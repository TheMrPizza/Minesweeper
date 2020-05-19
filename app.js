import MineBlockController from './blocks/controllers/mineBlockController.js';
import NumberBlockController from './blocks/controllers/numberBlockController.js';
import BlockId from './blockId.js';

const ROWS = 9;
const COLS = 9;
const MINES_COUNT = 10;
const mines = initMinesIndexes();

function initBlocks() {
    const gameElement = document.getElementById("game");
    for (let row = 0; row < ROWS; row++) {
        const rowElement = document.createElement("div");
        rowElement.className = "row center";

        for (let col = 0; col < COLS; col++) {
            const block = createBlock(new BlockId(row, col));
            rowElement.appendChild(block.init());
        }

        gameElement.appendChild(rowElement);
    }
}

function createBlock(blockId) {
    if (isMine(blockId)) {
        return new MineBlockController(blockId, explodeBoard);
    }
    
    return new NumberBlockController(blockId, calcMinesCount(blockId));
}

function initMinesIndexes() {
    const rows = [...Array(ROWS).keys()];
    const cols = [...Array(COLS).keys()];
    const options = [];
    for (let row of rows) {
        for (let col of cols) {
            options.push(new BlockId(row, col));
        }
    }

    const shuffled = options.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, MINES_COUNT);
}

function explodeBoard() {
    console.log("exploded!");
}

function calcMinesCount(id) {
    let minesCount = 0;
    const neighbors = [-1, 0, 1];

    for (let row of neighbors) {
        for (let col of neighbors) {
            const currentId = new BlockId(id.row + row, id.col + col);
            if (!(id.equals(currentId)) && isMine(currentId)) {
                minesCount++;
            }
        }
    }

    return minesCount;
}

function isMine(blockId) {
    return mines.some(mine => mine.equals(blockId));
}

window.onload = () => {
    initBlocks();
}