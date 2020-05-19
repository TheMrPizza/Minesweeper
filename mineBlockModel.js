import BlockModel from './blockModel.js';

class MineBlockModel extends BlockModel {
    constructor(id, explodeBoard) {
        super(id);

        this.explodeBoard = explodeBoard;
    }

    sweep() {
        this.explodeBoard();
    }
}

export default MineBlockModel;