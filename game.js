
// Create gameboard object
function createGameBoard(rows, columns){
    let board = []
    
    // Create board using 2D array
    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    }
    
    // Get board state
    const getBoard = () => board;

    return {
        board
    }
} 



// Create player object
function createPlayer(name) {
    let playerScore = 0;
    let isRoundWinner = false;
    return {
        name,
        playerScore,
        isRoundWinner
    } 
}


// Create game logic to control flow of game
function gameController() { 
    let isGameOver = false;
    return createGameBoard(3,3)

    // createPlayer()
    // createPlayer()
    // startGame();
    // endGame();


}

console.log(gameController());