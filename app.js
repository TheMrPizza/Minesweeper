import BoardController from './board/boardController.js';
import ToolbarController from './toolbar/toolbarController.js';

let rows = 9;
let cols = 9;
let minesCount = 10;

let board;
let toolbar;

function createGame() {
    createBoard();
    createToolbar();
    board.createBoard();
    toolbar.init();
}

function createBoard() {
    board = new BoardController(rows, cols, minesCount, onGameStarted, onFlagChanged);
}

function createToolbar() {
    toolbar = new ToolbarController(minesCount, createGame);
}

function onFlagChanged(hasMarked) {
    toolbar.onFlagChanged(hasMarked);
}

function onGameStarted() {
    toolbar.onGameStarted();
}

window.onload = () => {
    createGame();
}