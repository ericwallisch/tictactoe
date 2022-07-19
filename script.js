const gameBoard = (() => {
    const board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    const players = [];
    const init = () => {
    };

    const updateBoard = (cell, player) => {
        cells[cell].textContent = player.token;
        board[cell] = player.token;
    }

    const reset = () => {
        //empty all cells
        for (var i = 0; i < 9; i++) {
            cells[i].textContent = ' ';
            board[i] = ' ';
        }
    };
    const getBoard = () => {
        return board;
    };
    return {
        init,
        reset,
        updateBoard,
        getBoard
    };
})();

const game = (() => {   
    const players = [];
    let activePlayer = {};
    const init = () => {
        cacheDom();
        bindEvents();                
        addPlayer(playerFactory('Player One', 'X'));
        addPlayer(playerFactory('Player Two', 'O'));
        startGame();
        const gameboard = gameBoard.init();
    }
    const cacheDom = () => {
        //get DOM elements
        activePlayerElement = document.getElementById('activePlayer');
        restartButton = document.getElementById('restart')
        cells = document.getElementsByClassName('cell');
    };
    const bindEvents = () => {
        //bind click events
        restartButton.addEventListener('click', restartGame);
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
    const playerFactory = (name, token) => {
        playerCells = [];
        return {name, token, playerCells}
    };
    const setActivePlayer = (player) => {
        activePlayer = player;
        activePlayerElement.innerText = player.token;
        return activePlayer;
    };
    const changeActivePlayer = () => {
        if (activePlayer.token === 'X') {
            activePlayer = setActivePlayer(players[1]);
        }
        else {
            activePlayer = setActivePlayer(players[0]);
        }
    };
    const selectCell = (e) => {
        //if cell empty, select and add to gameBoard
        if (cells[e.target.id].textContent === " ") {
            cells[e.target.id].textContent = activePlayer.token;
            gameBoard.updateBoard(e.target.id, activePlayer)
            activePlayer.playerCells.push(e.target.id)
            if (checkForWinner() !== true) {
                changeActivePlayer();
            }
            
            //check for win
        }
        else {
            console.log('already selected')
        }
    };
    const checkForWinner = () => {
        let winningCombinations = [
        ["0","1","2"],["3","4","5"],["6","7","8"],
        ["0","3","6"],["1","4","7"],["2","5","8"],
        ["0","4","8"],["6","4","2"]
        ];
        console.log(activePlayer.playerCells)
        for (let i = 0; i < winningCombinations.length; i++) {
            //loop through the combinations see if every one is in the 
            //current player cell array
            if(winningCombinations[i].every(r => activePlayer.playerCells.includes(r))){
                gameOver('win');
                return true;
            }
        }
        console.log(gameBoard.getBoard())
        //if board full then draw
        if (gameBoard.getBoard().includes(' ') === false) {
            gameOver('draw');
            return true;
        }
        //winning combinations: 012, 345, 678, 036, 147, 258, 048, 642
        //check for full board

    };

    const startGame = () => {
        //randomize if player 1 or 2 goes first
        if (Math.random() < 0.5) {
            activePlayer = setActivePlayer(players[0]);
        }
        else {
            activePlayer = setActivePlayer(players[1]);
        }
    };
    const resetPlayers = () => {
        players[0].playerCells = [];
        players[1].playerCells = [];
    };
    const restartGame = () => {
        gameBoard.reset();
        resetPlayers();
        startGame()
    };
    const gameOver = (endCondition) => {
        if (endCondition === 'win') {
            activePlayerElement.innerText = `${activePlayer.name} wins!`;
        }
        else if (endCondition === 'draw') {
            activePlayerElement.innerText = `DRAW!`;
        }
        
    };
    return {
        init,
        startGame,
        addPlayer,
    }

})();

const currentGame = game.init();
console.log('game start');
