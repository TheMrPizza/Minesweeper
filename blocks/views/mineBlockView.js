import BlockView from "./blockView.js";

class MineBlockView extends BlockView {
    expose() {
        this.block.style.backgroundColor = "black";
        this.block.disabled = true;
    }
}

export default MineBlockView;