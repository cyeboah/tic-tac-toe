const startMenu = document.querySelector('.menu-start');
const gameBoardStart = document.querySelector('.game-board-start');
const others = document.querySelector('.others');
const cpuBtn = document.querySelector('.btn-cpu');
const playerBtn = document.querySelector('.btn-player');

// Initiaze game
document.addEventListener('DOMContentLoaded', () => {
  startMenu.style.display = 'grid';
  gameBoardStart.style.display = 'none';
  others.style.display = 'none';
});

const startGame = () => {
  gameBoardStart.style.display = 'grid';
  startMenu.style.display = 'none';
};

playerBtn.addEventListener('click', startGame);
cpuBtn.addEventListener('click', startGame);
