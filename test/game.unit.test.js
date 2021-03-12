const Game = require('../src/game')

describe('Game', () => {
  test('A new game sets up with an array of 9 empty strings', () => {
    let game = new Game()
    expect(game.fields.length).toEqual(9)
    expect(game.fields).toEqual(['', '', '', '', '', '', '', '', ''])
  })
})