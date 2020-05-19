import BlockController from "./blockController.js";
import NumberBlockModel from "../models/numberBlockModel.js";
import NumberBlockView from "../views/numberBlockView.js";

class NumberBlockController extends BlockController {
    constructor(id, number) {
        super(new NumberBlockModel(id, number), new NumberBlockView());
    }

    onClick() {
        if (!this.model.hasFlag) {
            this.model.sweep();
            this.view.expose(this.model.number);
        }
    }
}

export default NumberBlockController;