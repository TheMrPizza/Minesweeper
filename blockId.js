class BlockId {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    equals(blockId) {
        return blockId.row == this.row && blockId.col == this.col;
    }
}

export default BlockId;