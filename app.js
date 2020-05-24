import BoardController from "./board/boardController.js";
import ToolbarController from "./toolbar/toolbarController.js";

let gameRows = 9;
let gameCols = 9;
let gameMines = 10;

let board;
let toolbar;

window.createGame = (rows, cols, mines) => {
    init(rows, cols, mines);
    createBoard();
    createToolbar();
    board.createBoard();
    toolbar.init();
}

function init(rows, cols, mines) {
    gameRows = rows;
    gameCols = cols;
    gameMines = mines;
}

function createBoard() {
    board = new BoardController(gameRows, gameCols, gameMines,
        onGameStarted, onGameFinished, onFlagChanged);
}

function createToolbar() {
    toolbar = new ToolbarController(gameMines, () => createGame(gameRows, gameCols, gameMines));
}

function onFlagChanged(hasMarked) {
    toolbar.onFlagChanged(hasMarked);
}

function onGameStarted() {
    toolbar.onGameStarted();
}

function onGameFinished(isWin) {
    toolbar.onGameFinished(isWin);
}