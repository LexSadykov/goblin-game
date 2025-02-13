export default class Game {
    constructor() {
      this.boardSize = 4;
      this.board = [];
      this.character = document.createElement('img');
      this.character.src = './goblin.png';
      this.character.classList.add('goblin');
      this.currentPosition = null;
    }
  
    start() {
      this.createBoard();
      this.moveCharacter();
      setInterval(() => this.moveCharacter(), 1000);
    }
  
    createBoard() {
      const container = document.createElement('div');
      container.classList.add('board');
  
      for (let i = 0; i < this.boardSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        this.board.push(cell);
      }
  
      document.body.appendChild(container);
    }
  
    moveCharacter() {
      let newPosition;
      do {
        newPosition = Math.floor(Math.random() * this.board.length);
      } while (newPosition === this.currentPosition);
  
      if (this.currentPosition !== null) {
        this.board[this.currentPosition].removeChild(this.character);
      }
  
      this.board[newPosition].appendChild(this.character);
      this.currentPosition = newPosition;
    }
}