class BlockId {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    equals(blockId) {
        return blockId.row == this.row && blockId.col == this.col;
    }

    isValidate(rows, cols) {
        if (this.row < 0 || this.row >= rows) {
            return false;
        }

        if (this.col < 0 || this.col >= cols) {
            return false;
        }
        
        return true;
    }
}

export default BlockId;