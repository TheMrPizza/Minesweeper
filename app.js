import BoardController from './board/boardController.js';

const ROWS = 9;
const COLS = 9;
const MINES_COUNT = 10;

const board = new BoardController(ROWS, COLS, MINES_COUNT);

window.onload = () => {
    board.createBoard();
}