let board = document.getElementById("board");

// Game Board
const gameBoard = (() => {

});

// Display Controller
const displayControl = (() => {

});

// Players!

const Player = (playerName, playerSign) => {
    console.log(`My name is ${playerName} and I choose ${playerSymbol} for this game`);
    return {playerName, playerSign};
}


// function makeSq() {
//     let counter = 0;
//     while (counter < 9) {
//         let sq = document.createElement('div');
//         sq.className = 'square';
//         alert("Hi!")
//         counter++;
//     }
// }