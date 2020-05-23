class ToolbarView {
    constructor() {
        this.resetButton = document.getElementById("reset");
        this.time = document.getElementById("time-text");
        this.remainedMines = document.getElementById("remained-mines");
    }

    createToolbar(controller, time, minesCount) {
        this.resetButton.onclick = controller.onResetClick.bind(controller);
        this.setTime(time);
        this.setRemainedMines(minesCount);
    }

    setTime(time) {
        const minutes = time.getMinutes().toString().padStart(2, 0);
        const seconds = time.getSeconds().toString().padStart(2, 0);
        this.time.textContent = `${minutes}:${seconds}`;
    }

    setRemainedMines(count) {
        this.remainedMines.textContent = count;
    }
}

export default ToolbarView;