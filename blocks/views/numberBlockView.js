import BlockView from "./blockView.js";

class NumberBlockView extends BlockView {
    expose(minesCount) {
        const div = document.createElement("div");
        div.textContent = minesCount;
        div.style.color = this.getColor(minesCount);
        this.block.appendChild(div);
        this.block.disabled = true;
    }

    getColor(minesCount) {
        return appConfig.numbersColors[minesCount];
    }
}

export default NumberBlockView;