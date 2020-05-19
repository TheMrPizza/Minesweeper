class BlockController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        return this.view.createElement(this);
    }

    onRightClick() {
        if (this.model.hasFlag) {
            this.view.unmarkFlag();
        }
        else {
            this.view.markFlag();
        }

        this.model.hasFlag = !this.model.hasFlag;
        return false;
    }
}

export default BlockController;