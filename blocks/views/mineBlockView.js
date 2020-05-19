import BlockView from "./blockView.js";

class MineBlockView extends BlockView {
    expose() {
        const image = document.createElement("img");
        image.src = "/resources/mine.svg";
        image.style.width = "80%";
        this.block.appendChild(image);
        this.block.disabled = true;
    }
}

export default MineBlockView;