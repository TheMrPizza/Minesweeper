import BlockModel from "./blockModel.js";

class NumberBlockModel extends BlockModel {
    constructor(id, number) {
        super(id);

        this.number = number;
    }
}

export default NumberBlockModel;