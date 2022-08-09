const gameboard = (() => {
  let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'X'],
    ['X', 'O', 'O']
  ];

  const getBoard = () => board;
  const play = (i, j, type) => board[i][j] = type;

  return {
    getBoard,
    play,
  };
})();

const displayController = (() => {
  let board = gameboard.getBoard();
  const grid = document.querySelectorAll('#container > div');

  const renderBoard = () => {
    let gridNum = 0;
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
        grid[gridNum++].textContent = board[i][j];
  };

  return {
    renderBoard,
  };
})();

const player = (type) => {
  return {type};
};

const playerOne = player('X');
const playerTwo = player('O');

displayController.renderBoard();