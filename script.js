const gameBoard = (() => {
  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  const getBoard = () => board;
  const play = (i, j, type) => board[i][j] = type;
  return {
    getBoard,
    play,
  };
})();

const displayController = (() => {
  
})();

const player = (type) => {
  return {type};
};

const playerOne = player('X');
const playerTwo = player('O');