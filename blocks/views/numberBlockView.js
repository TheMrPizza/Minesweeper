import BlockView from "./blockView.js";

class NumberBlockView extends BlockView {
    expose(minesCount) {
        this.block.textContent = minesCount;
        this.block.disabled = true;
    }
}

export default NumberBlockView;