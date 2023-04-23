let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let playerTurn = 1;

function changeImage(row, col, player) {
  let imgSrc = "img/" + player + ".png";
  let imgId = "board" + row + col;
  document.getElementById(imgId).src = imgSrc;
}

function boardClick(row, col) {
  // alert("row "+row+" col "+col);
  board[row][col] = playerTurn;
  let winner = checkWinner();
  //check winner
  if (winner != 0) {
    alert("Player " + winner + " win!");
  }
  changePlayer();
  updateBoardImage();
}

function changePlayer() {
  if (playerTurn == 1) {
    playerTurn = 2;
  } else {
    playerTurn = 1;
  }
}

function updateBoardImage() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let player = board[row][col];
      changeImage(row, col, player);
    }
  }
  document.getElementById("playerTurn").innerHTML = "Player " + playerTurn;
}
// function to check winner

function checkWinner() {
  // check row
  for (let row = 0; row < 3; row++) {
    if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
      if (board[row][0] != 0) {
        return board[row][0];
      }
    }
  }
  // check col
  for (let col = 0; col < 3; col++) {
    if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
      if (board[0][col] != 0) {
        return board[0][col];
      }
    }
  }
  // check diagonal
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
    if (board[0][0] != 0) {
      return board[0][0];
    }
  }
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
    if (board[0][2] != 0) {
      return board[0][2];
    }
  }
  return 0;
}

updateBoardImage();
