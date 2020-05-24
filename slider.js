class Slider {
    constructor(name) {
        this.rangeElement = document.getElementById(`${name}-range`);
        this.textElement = document.getElementById(`${name}-text`);
        this.value = this.rangeElement.value;
    }

    setMaxValue(maxValue) {
        this.rangeElement.max = maxValue;
    }
}

export default Slider;