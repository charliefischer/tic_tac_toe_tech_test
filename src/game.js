class Game {
  fields = ['', '', '', '', '', '', '', '', '']

  move(place){
    if(this.fields[place - 1] !== '') {
      throw 'Field already taken'
    }
    this.fields[place - 1] = 'X'
  }
}

module.exports = Game