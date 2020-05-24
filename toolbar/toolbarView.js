class ToolbarView {
    constructor() {
        this.homeButton = document.getElementById("home");
        this.resetButton = document.getElementById("reset");
        this.time = document.getElementById("time-text");
        this.remainedMines = document.getElementById("remained-mines");
    }

    createToolbar(controller, minesCount) {
        this.homeButton.onclick = controller.onHomeClick.bind(controller);
        this.resetButton.onclick = controller.onResetClick.bind(controller);
        this.initTime();
        this.setRemainedMines(minesCount);
    }

    initTime() {
        this.setTime(new Date(0));
        this.time.style.color = appConfig.timeColors.neutral;
    }

    setTime(time) {
        const minutes = time.getMinutes().toString().padStart(2, 0);
        const seconds = time.getSeconds().toString().padStart(2, 0);
        this.time.textContent = `${minutes}:${seconds}`;
    }

    setRemainedMines(count) {
        this.remainedMines.textContent = count;
    }

    stopTime(isWin) {
        if (isWin) {
            this.time.style.color = appConfig.timeColors.win;
        }
        else {
            this.time.style.color = appConfig.timeColors.lose;
        }
    }

    onHomeClick() {
        document.getElementById("game-screen").style.display = "none";
        document.getElementById("home-screen").style.display = "flex";
    }
}

export default ToolbarView;