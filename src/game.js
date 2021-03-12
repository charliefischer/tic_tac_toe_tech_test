class Game {
  fields = ['', '', '', '', '', '', '', '', '']
  #count = 0
  #turn = ''

  move(place){
    this.#swapPlayer()
    this.#isSpaceAvailable(place)
    this.#makePlayersMove(place)
    if(this.#horizontalWin() || this.#diagonalWin() || this.#verticalWin()){
      throw 'Player 1 wins'
    }
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

  #horizontalWin(){
    return (this.fields[0] === 'X' && this.fields[1] === 'X' && this.fields[2] === 'X') ||
           (this.fields[3] === 'X' && this.fields[4] === 'X' && this.fields[5] === 'X') ||
           (this.fields[6] === 'X' && this.fields[7] === 'X' && this.fields[8] === 'X')
  }

  #diagonalWin(){
    return (this.fields[0] === 'X' && this.fields[4] === 'X' && this.fields[8] === 'X') ||
           (this.fields[2] === 'X' && this.fields[4] === 'X' && this.fields[6] === 'X')
  }

  #verticalWin(){
    return (this.fields[0] === 'X' && this.fields[3] === 'X' && this.fields[6] === 'X') ||
           (this.fields[1] === 'X' && this.fields[4] === 'X' && this.fields[7] === 'X') ||
           (this.fields[2] === 'X' && this.fields[5] === 'X' && this.fields[8] === 'X')
  }
}

module.exports = Game