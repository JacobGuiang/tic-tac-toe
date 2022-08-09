const gameboard = (() => {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  const getBoard = () => board;
  const update = (i, j, mark) => board[i][j] = mark;
  return {
    getBoard,
    update
  };
})();

const player = (mark) => {
  const getMark = () => mark;
  return {getMark};
};

const displayController = (() => {
  const board = gameboard.getBoard();
  const playerOne = player('x');
  const playerTwo = player('o');
  let curPlayer = playerOne;
  let numMoves = 0;

  const isWinner = (mark) => {
    let winner = false;

    // check rows and columns
    for(let i = 0; i < 3; i++)
      if(board[i][0] === mark && board[i][1] === mark && board[i][2] === mark || board[0][i] === mark && board[1][i] === mark && board[2][i] === mark)
        winner = true;

    // check diagonal
    if(board[0][0] === mark && board[1][1] === mark && board[2][2] === mark)
      winner = true;

    // check anti-diagonal
    if(board[2][0] === mark && board[1][1] === mark && board[0][2] === mark)
      winner = true;

    return winner;
  }

  const result = document.getElementById('result');

  // allow players to mark spots on gameboard
  const grid = document.querySelectorAll('#container > div');
  grid.forEach((div) => {
    div.addEventListener('click', () => {
      if(div.textContent.length === 0) {  // if spot isn't taken, place mark in spot
        mark = curPlayer.getMark();
        gameboard.update(div.dataset.row, div.dataset.col, mark);
        div.textContent = mark;
        numMoves++;
        curPlayer = (curPlayer === playerOne ? playerTwo : playerOne);  // next player's turn

        // check for winner or tie
        if(isWinner(mark))
          result.textContent = `${mark} wins`;
        else if(numMoves === 9)
          result.textContent = 'tie';
      }
    });
  });

  // restart game when restart button is clicked
  const restartButton = document.getElementById('restart');
  restartButton.addEventListener('click', () => {
    let gridItem = 0;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        gameboard.update(i, j, '');
        grid[gridItem++].textContent = '';
      }
    }
    numMoves=0;
    result.textContent = '';
    curPlayer = playerOne;
  });
})();