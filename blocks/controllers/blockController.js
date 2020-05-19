class BlockController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        return this.view.createElement(this);
    }

    onRightClick() {
        this.model.hasFlag = true;
        this.view.markFlag();
        return false;
    }
}

export default BlockController;