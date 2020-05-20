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

    onClick(resultAction) {
        if (!this.model.hasFlag) {
            this.expose();
            this.notifyClick(false);

            if (resultAction !== undefined) {
                resultAction();
            }
        }
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

    expose(exposeAction) {
        if (!this.isExposed) {
            this.view.unmarkFlag();
            exposeAction();
            this.hasFlag = false;
            this.isExposed = true;
        }
    }

    disable() {
        this.view.disable();
    }
}

export default BlockController;