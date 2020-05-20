class BlockController {
    constructor(model, view, notifyClick) {
        this.model = model;
        this.view = view;
        this.notifyClick = notifyClick;

        this.isExposed = false;
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
        this.notifyClick(true, this.model.hasFlag);
        return false;
    }

    disable() {
        this.view.disable();
    }
}

export default BlockController;