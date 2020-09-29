export class Test {
  constructor () {
    this.name = "Dillon"
    this.last = "Harris"
  }

  getFirst() {
    return this.name
  }
  getLast() {
    return this.last
  }
  getFull() {
    return this.getFirst() + " " + this.getLast()
  }
}

