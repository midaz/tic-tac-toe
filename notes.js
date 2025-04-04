/* 
Gameboard
    - store the gameboard as an array inside of a Gameboard object
    - 3x3 grid where each value in the array is 0 or 1 
    - 

Players 
    - players are also going to be stored in objects
    - Player attributes: name, tic or tac
    - Player methods: makeMove

Logic (GameController)
    - object to control the flow of the game
    - gameboard objects
    -  checking for all winning 3-in-a-rows and ties
    - prevents player from making a move on a taken tile 

displayController

Variables: 
    player1 score
    player2 score
    roundWinner
    isGameOver

Functions
    startGame()
    generateRandomMove()

Objects
    Gameboard
    Player
    gameEngine
const game = gameController();

1. Create a gameboard
    Reset gameboard
2. Create Player
3. Set Active Player
4. Log Move
5. Check Win Condition
5. Switch Active Player
6. Log Move
7. Check Win Condition
8. Check EndGame condition 


GameController manages game flow

Knows which player is active

Calls Gameboard.dropToken() to modify the board

Gameboard manages the state of the board

Knows what each cell contains

Calls Cell().addToken() on individual cells

Cell represents a single square and holds a token value

