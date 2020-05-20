import ToolbarModel from "./toolbarModel.js";
import ToolbarView from "./toolbarView.js";

class ToolbarController {
    constructor() {
        this.model = new ToolbarModel();
        this.view = new ToolbarView();
    }

    init() {

    }

    onGameStarted() {
        this.model.startTime();
        setInterval(() => {
            this.view.setTime(this.model.getTotalTime());
        }, 1000);
    }

    onResetClick() {
        console.log("reset!");
    }
}

export default ToolbarController;