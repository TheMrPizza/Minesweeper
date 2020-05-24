class BlockController {
    constructor(model, view, notifyChange) {
        this.model = model;
        this.view = view;
        this.notifyChange = notifyChange;

        this.isExposed = false;
    }

    init() {
        return this.view.createElement(this);
    }

    onClick(resultAction) {
        if (!this.model.hasFlag) {
            this.expose();
            this.notifyChange();

            if (resultAction !== undefined) {
                resultAction();
            }
        }
    }

    onRightClick() {
        this.changeFlag(!this.model.hasFlag);
        return false;
    }

    expose(exposeAction) {
        if (!this.isExposed) {
            if (this.model.hasFlag) {
                this.changeFlag(false);
            }
            
            exposeAction();
            this.isExposed = true;
        }
    }

    markWinFlag() {
        this.view.markFlag(true, true);
    }

    changeFlag(value) {
        if (value) {
            this.view.markFlag();
        }
        else {
            this.view.unmarkFlag();
        }

        this.model.hasFlag = value;
        this.notifyChange(value);
    }

    disable() {
        this.view.disable();
    }
}

export default BlockController;