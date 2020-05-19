class BlockView {
    createElement(controller) {
        this.block = document.createElement("button");
        this.block.className = "block";
        this.block.onclick = controller.onClick.bind(controller);
        this.block.oncontextmenu = controller.onRightClick.bind(controller);
        return this.block;
    }

    markFlag() {
        this.block.style.backgroundColor = "red";
    }

    expose(minesCount) {
        this.block.textContent = minesCount;
    }

    explode() {
        this.block.style.backgroundColor = "black";
    }
}

export default BlockView;