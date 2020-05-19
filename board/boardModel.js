import MineBlockController from "../blocks/controllers/mineBlockController.js";
import NumberBlockController from "../blocks/controllers/numberBlockController.js";
import EmptyBlockController from "../blocks/controllers/emptyBlockController.js";
import BlockId from "../blockId.js";

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
        const corners = this.getCornerIds();
        const blocksCopy = Array.from(this.blockIds).flat().filter(blockId => {
            return !corners.some(corner => corner.equals(blockId));
        });

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

        const minesCount = this.calcMinesCount(blockId);
        if (minesCount == 0) {
            return new EmptyBlockController(blockId, this.expandEmptyBlocks.bind(this));
        }
        
        return new NumberBlockController(blockId, minesCount);
    }

    expandEmptyBlocks(blockId) {
        const neighbors = this.getNeighbors(blockId);
        for (let currentBlockId of neighbors) {
            const block = this.getBlock(currentBlockId);
            if (!block.isExposed) {
                if (block instanceof EmptyBlockController) {
                    block.expose();
                    this.expandEmptyBlocks(currentBlockId);
                }
                else if (block instanceof NumberBlockController) {
                    block.expose();
                }
            }
        }
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

    getNeighbors(blockId) {
        const neighbors = [];

        const adjacent = [-1, 0, 1];
        for (let row of adjacent) {
            for (let col of adjacent) {
                const currentId = new BlockId(blockId.row + row, blockId.col + col);
                if (!(blockId.equals(currentId)) && currentId.isValidate(this.ROWS, this.COLS)) {
                    neighbors.push(currentId);
                }
            }
        }

        return neighbors;
    }

    getCornerIds() {
        const corners = [];
        for (let row of [0, this.ROWS - 1]) {
            for (let col of [0, this.COLS - 1]) {
                corners.push(new BlockId(row, col));
            }
        }

        return corners;
    }

    isMine(blockId) {
        return this.minesIds.some(mine => mine.equals(blockId));
    }

    getMines() {
        return this.minesIds.map(id => this.getBlock(id));
    }

    getBlock(blockId) {
        return this.blocks[blockId.row][blockId.col];
    }
}

export default Board;