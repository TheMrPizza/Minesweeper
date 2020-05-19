import BlockController from "./blockController.js";
import MineBlockView from "../views/mineBlockView.js";
import BlockModel from "../models/blockModel.js";

class MineBlockController extends BlockController {
    constructor(id, explodeBoard) {
        super(new BlockModel(id), new MineBlockView());

        this.explodeBoard = explodeBoard;
    }

    onClick() {
        if (!this.model.hasFlag) {
            this.expose();
            this.explodeBoard(this.model.id);
        }
    }

    expose() {
        if (!this.isExposed) {
            this.view.expose();
            this.isExposed = true;
        }
    }
}

export default MineBlockController;