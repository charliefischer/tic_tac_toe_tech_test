class Game {
  fields = ['', '', '', '', '', '', '', '', '']
  count = 0

  move(place){
    let turn = 'X'
    if (this.count % 2 === 0) {
      turn = 'X'
    } else {
      turn = 'O'
    }
    if(this.fields[place - 1] !== '') {
      throw 'Field already taken'
    }
    this.fields[place - 1] = turn
    this.count++
  }
}

module.exports = Game