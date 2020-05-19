import BoardModel from './boardModel.js';
import BoardView from './boardView.js';

class BoardController {
    constructor(rows, cols, minesCount) {
        this.model = new BoardModel(rows, cols, minesCount, this.explodeBoard.bind(this));
        this.view = new BoardView();
    }

    createBoard() {
        this.model.init();
        this.view.createBoard(this.model.blocks);
    }

    explodeBoard(mineId) {
        this.model.blocks.flat().forEach(block => block.disable());
        const mines = this.model.getMines().filter(mine => {
            return !mine.model.id.equals(mineId) && !mine.model.hasFlag;
        });
        
        this.view.explodeBoard(mines);
    }
}

export default BoardController;