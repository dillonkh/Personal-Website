export class GamePiece {
  constructor (width, height, color, x, y) {
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
  }

  newPos () {
    this.x += this.speedX
    this.y += this.speedY        
  }

  update (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}