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
    update,
  };
})();

const player = (mark) => {
  const getMark = () => mark;
  return {getMark};
};

const displayController = (() => {
  const board = gameboard.getBoard();
  const playerOne = player('X');
  const playerTwo = player('O');
  let curPlayer = playerOne;

  const grid = document.querySelectorAll('#container > div');
  grid.forEach((div) => {
    div.addEventListener('click', () => {
      if(div.textContent.length === 0) {
        gameboard.update(div.dataset.row, div.dataset.col, curPlayer.getMark());
        div.textContent = curPlayer.getMark();
        curPlayer = (curPlayer === playerOne ? playerTwo : playerOne);
      }
    });
  });

  // const renderBoard = () => {
  //   let gridNum = 0;
  //   for(let i = 0; i < 3; i++)
  //     for(let j = 0; j < 3; j++)
  //       grid[gridNum++].textContent = board[i][j];
  // };

  // return {
  //   renderBoard,
  // };
})();