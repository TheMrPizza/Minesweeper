import BlockView from "./blockView.js";

class NumberBlockView extends BlockView {
    expose(minesCount) {
        this.block.textContent = minesCount;
    }
}

export default NumberBlockView;