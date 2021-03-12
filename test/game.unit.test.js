const Game = require('../src/game')

let game;

beforeEach(() => {
  game = new Game()
})

describe('Game', () => {
  test('A new game sets up with an array of 9 empty strings', () => {
    expect(game.fields.length).toEqual(9)
    expect(game.fields).toEqual(['', '', '', '', '', '', '', '', ''])
  })

  test('A user can make a move', () => {
    game.move(4)
    expect(game.fields).toEqual(['', '', '', 'X', '', '', '', '', ''])
  })

  test('you can make two moves at the same field', () => {
    game.move(1)
    expect(() => {
      game.move(1)
    }).toThrow('Field already taken')
  })
})