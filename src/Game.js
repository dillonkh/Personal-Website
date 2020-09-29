import {GamePiece} from "./GamePiece"
import {GameArea} from "./GameArea"

export class Game {
  constructor (width, height, color, x, y) {
    this.gamePiece = new GamePiece(width, height, color, x, y)
    this.gameArea = new GameArea()
  }

  startGame () {
    this.gameArea.start();
    setInterval(() => {}, 2000);
  }

  update () {
    console.log("update")
    this.clear()
    this.gamePiece.update(this.gameArea.context)
  }

  clear() {
    this.gameArea.context.clearRect(0, 0, this.gameArea.canvas.width, this.gameArea.canvas.height);
  }

  moveup () {
    this.gamePiece.speedY -= 1; 
  }

  movedown () {
    this.gamePiece.speedY += 1; 
  }

  moveleft () {
    this.gamePiece.speedX -= 1; 
  }

  moveright () {
    this.gamePiece.speedX += 1; 
  }
}