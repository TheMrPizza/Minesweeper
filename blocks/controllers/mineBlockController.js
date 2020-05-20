import BlockController from "./blockController.js";
import MineBlockView from "../views/mineBlockView.js";
import BlockModel from "../models/blockModel.js";

class MineBlockController extends BlockController {
    constructor(id, notifyClick, explodeBoard) {
        super(new BlockModel(id), new MineBlockView(), notifyClick);

        this.explodeBoard = explodeBoard;
    }

    onClick() {
        super.onClick(() => {
            this.explodeBoard(this.model.id);
        });
    }

    expose() {
        super.expose(() => {
            this.view.expose();
        });
    }
}

export default MineBlockController;