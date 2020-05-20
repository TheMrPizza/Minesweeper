import BoardController from './board/boardController.js';
import ToolbarController from './toolbar/toolbarController.js';

const ROWS = 9;
const COLS = 9;
const MINES_COUNT = 10;

const board = new BoardController(ROWS, COLS, MINES_COUNT, onGameStarted);
const toolbar = new ToolbarController();

function onGameStarted() {
    toolbar.onGameStarted();
}

window.onload = () => {
    board.createBoard();
    toolbar.init();
}