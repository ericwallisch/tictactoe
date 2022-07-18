const playerFactory = (name, token) => {
    return {name, token}
};


const gameBoard = (() => {
    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    const players = [];
    const init = () => {
        cacheDom();
        bindEvents()
        render();
    };
    const cacheDom = () => {
        //get DOM elements
        cells = document.getElementsByClassName('cell');
    };
    const bindEvents = () => {
        //bind click events
        for (var i = 0; i < 9; i++) {
            cells[i].addEventListener('click', selectCell.bind(this));
        }
    };
    const render = () => {

        //update DOM
    };
    const addPlayer = (player) => {
        players.push(player);
    };
    const selectCell = (e) => {
        //if cell empty, select and add to gameBoard
        if (cells[e.target.id].textContent === " ") {
            //edit token to token of player
            cells[e.target.id].textContent = 'X';
            board[e.target.id] = 'X';
            render();
            checkForGameEnd;
        }
        else {
            console.log('already selected')
        }
    };
    const checkForGameEnd = () => {
        //checkForWinner
        //winning combinations: 012, 345, 678, 036, 147, 258, 048, 642
        //check for full board
    };
    const reset = () => {
        //empty all cells
    };
    return {
        init,
        addPlayer,
        selectCell,
        checkForGameEnd,
        reset
    };
})();

gameBoard.init();

