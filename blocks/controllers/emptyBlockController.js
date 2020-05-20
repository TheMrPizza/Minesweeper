import BlockController from "./blockController.js";
import BlockModel from "../models/blockModel.js";
import BlockView from "../views/blockView.js";

class EmptyBlockController extends BlockController {
    constructor(id, notifyClick, expandEmptyBlocks) {
        super(new BlockModel(id), new BlockView(), notifyClick);

        this.expandEmptyBlocks = expandEmptyBlocks;
    }

    onClick() {
        super.onClick(() => {
            this.expandEmptyBlocks(this.model)
        });
    }

    expose() {
        super.expose(() => {
            this.view.expose();
        });
    }
}

export default EmptyBlockController;