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
}

export default BlockView;