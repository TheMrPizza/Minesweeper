import BlockController from "./blockController.js";
import NumberBlockModel from "../models/numberBlockModel.js";
import NumberBlockView from "../views/numberBlockView.js";

class NumberBlockController extends BlockController {
    constructor(id, notifyClick, number) {
        super(new NumberBlockModel(id, number), new NumberBlockView(), notifyClick);
    }

    onClick() {
        super.onClick();
    }

    expose() {
        super.expose(() => {
            this.view.expose(this.model.number);
        });
    }
}

export default NumberBlockController;