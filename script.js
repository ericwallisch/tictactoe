const playerFactory = (name, token) => {
    return {name, token}
};

(function() {
    var game = {
        gameBoard : [' ',' ',' ',' ',' ',' ',' ',' ',' '],
        players : [],
        init: function() {
            this.cacheDom();
            this.bindEvents()
            this.render();
        },
        cacheDom: function() {
            //get DOM elements
            this.cells = document.getElementsByClassName('cell');
        },
        bindEvents: function() {
            //bind click events
            for (var i = 0; i < 9; i++) {
                this.cells[i].addEventListener('click', this.selectCell.bind(this));
            }
        },
        render: function() {

            //update DOM
        },
        addPlayer: function(player) {
            //add player to game
        },
        selectCell: function(e) {
            //if cell empty, select and add to gameBoard
            console.log(this.cells[e.target.id]);
            console.log(e.target.id);
            if (this.cells[e.target.id].textContent === " ") {
                //edit token to token of player
                this.cells[e.target.id].textContent = 'X';
                this.render();
                this.checkForGameEnd;
            }
            else {
                console.log('already selected')
            }
        },
        checkForGameEnd: function() {
            //checkForWinner
            //winning combinations: 012, 345, 678, 036, 147, 258, 048, 642
            //check for full board
        }
    }
    game.init();
    const eric = playerFactory('Eric', 'X')

})();
