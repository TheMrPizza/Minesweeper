import BlockController from "./blockController.js";
import BlockModel from "../models/blockModel.js";
import BlockView from "../views/blockView.js";

class EmptyBlockController extends BlockController {
    constructor(id, expandEmptyBlocks) {
        super(new BlockModel(id), new BlockView());

        this.expandEmptyBlocks = expandEmptyBlocks;
    }

    onClick() {
        if (!this.model.hasFlag) {
            this.expose();
            console.log(new Date().toJSON());
            this.expandEmptyBlocks(this.model);
            console.log(new Date().toJSON());
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