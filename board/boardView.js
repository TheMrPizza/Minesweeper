class BoardView {
    constructor() {
        this.gameElement = document.getElementById("game");
    }
    
    createBoard(blocks) {
        for (let row of blocks) {
            const rowElement = this.createRow();
            for (let block of row) {
                rowElement.appendChild(block.init());
            }
        }
    }

    createRow() {
        const rowElement = document.createElement("div");
        rowElement.className = "row center";
        this.gameElement.appendChild(rowElement);
        return rowElement;
    }

    explodeBoard(mineBlocks) {
        for (let i = 0; i < mineBlocks.length; i++) {
            setTimeout(() => mineBlocks[i].expose(), 500 + 500 * Math.sqrt(i));
        }
    }
}

export default BoardView;