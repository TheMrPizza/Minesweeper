import BoardModel from "./boardModel.js";
import MineBlockController from "../blocks/controllers/mineBlockController.js";
import NumberBlockController from "../blocks/controllers/numberBlockController.js";
import EmptyBlockController from "../blocks/controllers/emptyBlockController.js";
import BlockId from "../blockId.js";

class BoardCreator {
    constructor(rows, cols, minesCount, explodeBoard, expandEmptyBlocks) {
        this.board = new BoardModel(rows, cols, minesCount);
        this.explodeBoard = explodeBoard;
        this.expandEmptyBlocks = expandEmptyBlocks;

        this.blockIds = [];
        this.minesIds = [];
    }

    build() {
        this.initBlockIds();
        this.initMinesIndexes();
        this.initBlocks();
        return this.board;
    }

    initBlockIds() {
        for (let row = 0; row < this.board.ROWS; row++) {
            const blocksRow = [];
            for (let col = 0; col < this.board.COLS; col++) {
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
        this.minesIds = shuffled.slice(0, this.board.MINES_COUNT);
    }

    initBlocks() {
        for (let row in this.blockIds) {
            const blocksRow = [];
            for (let col in this.blockIds[row]) {
                blocksRow.push(this.createBlock(this.blockIds[row][col]));
            }

            this.board.blocks.push(blocksRow);
        }
    }

    createBlock(blockId) {
        if (this.isMine(blockId)) {
            return new MineBlockController(blockId, this.explodeBoard);
        }

        const minesCount = this.calcMinesCount(blockId);
        if (minesCount == 0) {
            return new EmptyBlockController(blockId, this.expandEmptyBlocks);
        }
        
        return new NumberBlockController(blockId, minesCount);
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

    getCornerIds() {
        const corners = [];
        for (let row of [0, this.board.ROWS - 1]) {
            for (let col of [0, this.board.COLS - 1]) {
                corners.push(new BlockId(row, col));
            }
        }

        return corners;
    }

    isMine(blockId) {
        return this.minesIds.some(mine => mine.equals(blockId));
    }
}

export default BoardCreator;