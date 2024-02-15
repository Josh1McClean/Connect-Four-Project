let playerBlue = "B"
let playerWhite = "W"
let currPlayer = playerBlue;

let gameOver = false;
let board;

let rows = 6;
let columns = 7;
let currColumns;

//Activates When The Page Loads
window.onload = function () {
    setGame();
}

//Populates The Tiles Within The Board
function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');

            // HTML
            //<div id="0-0" class="tile"></div> Automates Me Having To Do This Multiple Times Manually In HTML 
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile)
        }
        board.push(row);
    }
}
//This Board In Javascript Is Going To Correspond To The Tiles In The HTML Page

function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-")
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currColumns[c];
    if (r < 0) {
        return;
    }

    board[r][c] = currPlayer;
    let tile = document.getElementById(r.toString() + '-' + c.toString());
    if (currPlayer == playerBlue) {
        tile.classList.add("blue-piece");
        currPlayer = playerWhite;  // Fix: Change currPlayer to playerWhite for the next turn
    } else {
        tile.classList.add("white-piece");
        currPlayer = playerBlue;
    }


    r -= 1; //Updates Row Height For Columns
    currColumns[c] = r; //Updates The Array

    checkWinner();
}

function checkWinner() {
    //Horizontally
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c + 1] && board[r][c + 1] == board[r][c + 2] && board[r][c + 2] == board[r][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    //Vertically
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r + 1][c] && board[r + 1][c] == board[r + 2][c] && board[r + 2][c] == board[r + 3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    //Anti-Diagonally
    // Anti-Diagonally
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] === board[r + 1][c + 1] && board[r + 1][c + 1] === board[r + 2][c + 2] && board[r + 2][c + 2] === board[r + 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    //Diagonally
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerBlue) {
        winner.innerText = "Blue Wins🔥";
    } else {
        winner.innerText = "White Wins🥳";
    }

    gameOver = true;
}