import BlockModel from "./blockModel.js";

class NumberBlockModel extends BlockModel {
    constructor(id, number) {
        super(id);

        this.number = number;
    }

    sweep() {
        console.log("number");
    }
}

export default NumberBlockModel;