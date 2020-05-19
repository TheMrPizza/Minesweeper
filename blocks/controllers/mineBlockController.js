import BlockController from "./blockController.js";
import MineBlockModel from "../models/mineBlockModel.js";
import MineBlockView from "../views/mineBlockView.js";

class MineBlockController extends BlockController {
    constructor(id, explodeBoard) {
        super(new MineBlockModel(id), new MineBlockView());

        this.explodeBoard = explodeBoard;
        this.isExposed = false;
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