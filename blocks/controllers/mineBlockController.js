import BlockController from "./blockController.js";
import MineBlockModel from "../models/mineBlockModel.js";
import MineBlockView from "../views/mineBlockView.js";

class MineBlockController extends BlockController {
    constructor(id, explodeBoard) {
        super(new MineBlockModel(id), new MineBlockView());

        this.explodeBoard = explodeBoard;
    }

    onClick() {
        this.view.expose();
        this.explodeBoard();
    }
}

export default MineBlockController;