class BlockView {
    createElement(controller) {
        this.block = document.createElement("button");
        this.block.className = "block center";
        this.block.onclick = controller.onClick.bind(controller);
        this.block.oncontextmenu = controller.onRightClick.bind(controller);
        return this.block;
    }

    markFlag() {
        const image = document.createElement("img");
        image.src = "/resources/flag.svg";
        image.style.width = "60%";
        this.block.appendChild(image);
    }

    unmarkFlag() {
        this.block.innerHTML = "";
    }
}

export default BlockView;