import BoardView from './boardView.js';
import BoardBuilder from './boardBuilder.js';
import EmptyBlockController from '../blocks/controllers/emptyBlockController.js';
import NumberBlockController from '../blocks/controllers/numberBlockController.js';

class BoardController {
    constructor(rows, cols, minesCount, onGameStarted, onGameFinished, onFlagChanged) {
        this.modelBuilder = new BoardBuilder(rows, cols, minesCount,
            this.explodeBoard.bind(this), this.expandEmptyBlocks.bind(this),
            this.onBlockChange.bind(this));

        this.view = new BoardView();
        this.onGameStarted = onGameStarted;
        this.onGameFinished = onGameFinished;
        this.onFlagChanged = onFlagChanged;

        this.hasStarted = false;
    }

    createBoard() {
        this.model = this.modelBuilder.build();
        this.view.createBoard(this.model.blocks);
    }

    explodeBoard(mineId) {
        const mines = this.model.getRemainedMines(this.modelBuilder.minesIds).filter(mine => {
            return !mine.model.id.equals(mineId);
        });

        this.view.disableAll(this.model.blocks.flat());
        this.view.explodeBoard(mines);
        this.onGameFinished(false);
    }

    winBoard() {
        const mines = this.model.getBlocks(this.modelBuilder.minesIds);
        this.view.disableAll(this.model.blocks.flat());
        this.view.winBoard(mines);
        this.onGameFinished(true);
    }

    expandEmptyBlocks(block, depth=0) {
        const emptyBlocks = this.model.getExpandableBlocks(block, EmptyBlockController);
        const numberBlocks = this.model.getExpandableBlocks(block, NumberBlockController);

        emptyBlocks.concat(numberBlocks).forEach(block => {
            block.expose();
        });

        emptyBlocks.forEach(block => {
            setTimeout(() => {
                this.expandEmptyBlocks(block.model, depth + 1)
            }, 5 * depth);
        });
    }

    checkForWin() {
        const mines = this.model.getRemainedMines(this.modelBuilder.minesIds);
        if (mines.length === 0) {
            this.winBoard();
        }
    }

    onBlockChange(hasFlag=undefined) {
        if (!this.hasStarted) {
            this.onGameStarted();
            this.hasStarted = true;
        }

        if (hasFlag !== undefined) {
            this.onFlagChanged(hasFlag);
            this.checkForWin();
        }
    }
}

export default BoardController;