import NumberBlockModel from './numberBlockModel.js';
import BlockView from './blockView.js';

class BlockController {
    constructor() {
        this.model = new NumberBlockModel(0, 2);
        this.view = new BlockView();
    }

    init() {
        return this.view.createElement(this);
    }

    onClick() {
        this.model.sweep();
    }

    onRightClick() {
        this.model.hasFlag = true;
        this.view.markFlag();
    }
}

export default BlockController;