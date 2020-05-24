import Slider from "./slider.js";

const sliders = {rows: {}, cols: {}, mines: {}};

function initSliders() {
    for (let name in sliders) {
        const slider = new Slider(name);
        sliders[name] = slider;

        if (name == "mines") {
            slider.rangeElement.oninput = onMinesSliderInput.bind(slider);
        }
        else {
            slider.rangeElement.oninput = onSizeSliderInput.bind(slider);
        }
    }
}

function initButton() {
    document.getElementById("start-button").onclick = () => {
        document.getElementById("home-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
        window.createGame(sliders.rows.value, sliders.cols.value, sliders.mines.value);
    }
}

function onSizeSliderInput(e) {
    this.value = e.target.value;
    this.textElement.textContent = this.value;
    updateMaxMines();
}

function onMinesSliderInput(e) {
    this.value = e.target.value;
    this.textElement.textContent = this.value;
}

function updateMaxMines() {
    const rows = sliders.rows.value;
    const cols = sliders.cols.value;
    sliders.mines.setMaxValue((rows - 1) * (cols - 1));
}

window.onload = () => {
    initSliders();
    initButton();
}
