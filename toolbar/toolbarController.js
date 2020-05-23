import ToolbarModel from "./toolbarModel.js";
import ToolbarView from "./toolbarView.js";

class ToolbarController {
    constructor(minesCount, onReset) {
        this.model = new ToolbarModel(minesCount);
        this.view = new ToolbarView();
        this.onReset = onReset;
    }

    init() {
        this.view.createToolbar(this, new Date(0), this.model.remainedMines);
    }

    onGameStarted() {
        this.model.startTime();
        this.interval = setInterval(() => {
            this.view.setTime(this.model.getTotalTime());
        }, 1000);
    }

    onHomeClick() {
        clearInterval(this.interval);
        this.view.onHomeClick();
    }

    onResetClick() {
        clearInterval(this.interval);
        this.onReset();
    }

    onFlagChanged(hasMarked) {
        if (hasMarked) {
            this.model.remainedMines--;
        }
        else {
            this.model.remainedMines++;
        }
        
        this.view.setRemainedMines(this.model.remainedMines);
    }
}

export default ToolbarController;