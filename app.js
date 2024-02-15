const playerBlue = "B"
const playerWhite = "W"
const firstTurn = playerBlue;

let gameOver = false;
let board;

let rows = 6;
let columns = 7;

//Activates When The Page Loads
window.onload = function () {
    setGame();
}

//Populates The Tiles Within The Board
function setGame() {
    board = [];

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
            document.getElementById("board").append(tile)
        }
        board.push(row);
    }
}
//This Board In Javascript Is Going To Correspond To The Tiles In The HTML Page

