import BlockView from "./blockView.js";

class MineBlockView extends BlockView {
    expose() {
        this.block.style.backgroundColor = "black";
    }
}

export default MineBlockView;