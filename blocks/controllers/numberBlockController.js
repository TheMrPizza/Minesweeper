import BlockController from "./blockController.js";
import NumberBlockModel from "../models/numberBlockModel.js";
import NumberBlockView from "../views/numberBlockView.js";

class NumberBlockController extends BlockController {
    constructor(id, notifyClick, number) {
        super(new NumberBlockModel(id, number), new NumberBlockView(), notifyClick);
    }

    onClick() {
        if (!this.model.hasFlag) {
            this.model.sweep();
            this.expose();
            this.notifyClick();
        }
    }

    expose() {
        if (!this.isExposed) {
            this.view.expose(this.model.number);
            this.isExposed = true;
        }
    }
}

export default NumberBlockController;