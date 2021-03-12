class Game {
  fields = ['', '', '', '', '', '', '', '', '']
  #count = 0
  #turn = ''

  move(place){
    this.#swapPlayer()
    this.#isSpaceAvailable(place)
    this.#makePlayersMove(place)
    this.#isGameOver()
  }

  #makePlayersMove(place){
    this.fields[place - 1] = this.#turn
    this.#count++
  }

  #swapPlayer(){
    if (this.#count % 2 === 0) {
      this.#turn = 'X'
    } else {
      this.#turn = 'O'
    }
  }

  #isSpaceAvailable(place){
    if(this.fields[place - 1] !== '') {
      throw 'Field already taken'
    }
  }

  #isGameOver(){
    if(this.#count >= 9){
      throw 'Game Over'
    }
  }
}

module.exports = Game