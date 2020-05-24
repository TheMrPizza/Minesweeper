class ToolbarModel {
    constructor(minesCount) {
        this.remainedMines = minesCount;
        this.isRunning = false;
    }

    startTime() {
        this.startTime = new Date();
        this.isRunning = true;
    }

    stopTime() {
        this.stopTime = this.getTotalTime();
        this.isRunning = false;
    }

    markFlag() {
        this.remainedMines--;
    }

    getTotalTime() {
        if (this.isRunning) {
            const currentTime = new Date();
            return new Date(currentTime - this.startTime);
        }
        
        return this.stopTime;
    }
}

export default ToolbarModel;