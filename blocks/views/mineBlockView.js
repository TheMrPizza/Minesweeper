import BlockView from "./blockView.js";

class MineBlockView extends BlockView {
    expose() {
        this.unmarkFlag();
        const image = document.createElement("img");
        image.src = "/resources/mine.svg";
        image.style.width = "80%";
        this.block.appendChild(image);
        this.block.className = "block center";
        this.disable();
    }
}

export default MineBlockView;