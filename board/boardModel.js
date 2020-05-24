import BlockId from "../blockId.js";

class BoardModel {
    constructor(rows, cols, minesCount) {
        this.ROWS = rows;
        this.COLS = cols;
        this.MINES_COUNT = minesCount;

        this.blocks = [];
    }
        
    getRemainedMines(mineIds) {
        const mines = this.getBlocks(mineIds);
        return mines.filter(mine => !mine.model.hasFlag);
    }

    getExpandableBlocks(block, blocksType) {
        return this.getNeighbors(block.id).filter(block => {
            return !block.isExposed && block instanceof blocksType;
        });
    }

    getNeighbors(blockId) {
        const neighbors = [];

        const adjacent = [-1, 0, 1];
        for (let row of adjacent) {
            for (let col of adjacent) {
                const currentId = new BlockId(blockId.row + row, blockId.col + col);
                if (!(blockId.equals(currentId)) && currentId.isValidate(this.ROWS, this.COLS)) {
                    neighbors.push(this.getBlock(currentId));
                }
            }
        }

        return neighbors;
    }

    getBlocks(blockIds) {
        return blockIds.map(id => this.getBlock(id));
    }

    getBlock(blockId) {
        return this.blocks[blockId.row][blockId.col];
    }
}

export default BoardModel;