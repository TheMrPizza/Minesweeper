import BlockController from "./blockController.js";
import BlockModel from "../models/blockModel.js";
import BlockView from "../views/blockView.js";

class EmptyBlockController extends BlockController {
    constructor(id, notifyClick, expandEmptyBlocks) {
        super(new BlockModel(id), new BlockView(), notifyClick);

        this.expandEmptyBlocks = expandEmptyBlocks;
    }

    onClick() {
        if (!this.model.hasFlag) {
            this.expose();
            this.expandEmptyBlocks(this.model);
            this.notifyClick(false);
        }
    }

    expose() {
        if (!this.isExposed) {
            this.view.uncover();
            this.isExposed = true;
        }
    }
}

export default EmptyBlockController;