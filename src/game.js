class Game {
  fields = ['', '', '', '', '', '', '', '', '']
  count = 0
  turn = ''

  move(place){
    this.#swapPlayer()

    if(this.fields[place - 1] !== '') {
      throw 'Field already taken'
    }
    this.fields[place - 1] = this.turn
    this.count++
  }

  #swapPlayer(){
    if (this.count % 2 === 0) {
      this.turn = 'X'
    } else {
      this.turn = 'O'
    }
  }
}

module.exports = Game