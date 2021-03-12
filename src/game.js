class Game {
  fields = ['', '', '', '', '', '', '', '', '']

  move(place){
    this.fields[place - 1] = 'X'
  }
}

module.exports = Game