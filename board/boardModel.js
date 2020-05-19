import MineBlockController from '../blocks/controllers/mineBlockController.js';
import NumberBlockController from '../blocks/controllers/numberBlockController.js';
import BlockId from '../blockId.js';

class Board {
    constructor(rows, cols, minesCount, explodeBoard) {
        this.ROWS = rows;
        this.COLS = cols;
        this.MINES_COUNT = minesCount;
        this.explodeBoard = explodeBoard;

        this.blockIds = [];
        this.minesIds = [];
        this.blocks = [];
    }

    init() {
        this.initBlockIds();
        this.initMinesIndexes();
        this.initBlocks();
    }

    initBlockIds() {
        for (let row = 0; row < this.ROWS; row++) {
            const blocksRow = [];
            for (let col = 0; col < this.COLS; col++) {
                blocksRow.push(new BlockId(row, col));
            }

            this.blockIds.push(blocksRow);
        }
    }
    
    initMinesIndexes() {
        const blocksCopy = Array.from(this.blockIds).flat();
        const shuffled = blocksCopy.sort(() => 0.5 - Math.random());
        this.minesIds = shuffled.slice(0, this.MINES_COUNT);
    }

    initBlocks() {
        for (let row in this.blockIds) {
            const blocksRow = [];
            for (let col in this.blockIds[row]) {
                blocksRow.push(this.createBlock(this.blockIds[row][col]));
            }

            this.blocks.push(blocksRow);
        }
    }

    createBlock(blockId) {
        if (this.isMine(blockId)) {
            return new MineBlockController(blockId, this.explodeBoard);
        }
        
        return new NumberBlockController(blockId, this.calcMinesCount(blockId));
    }

    calcMinesCount(blockId) {
        let minesCount = 0;
        const neighbors = [-1, 0, 1];
    
        for (let row of neighbors) {
            for (let col of neighbors) {
                const currentId = new BlockId(blockId.row + row, blockId.col + col);
                if (!(blockId.equals(currentId)) && this.isMine(currentId)) {
                    minesCount++;
                }
            }
        }
    
        return minesCount;
    }

    isMine(blockId) {
        return this.minesIds.some(mine => mine.equals(blockId));
    }

    getMines() {
        return this.minesIds.map(id => this.blocks[id.row][id.col]);
    }
}

export default Board;