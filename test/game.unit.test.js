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

  test('Turns swap after each go', () => {
    game.move(1)
    game.move(2)
    expect(game.fields).toEqual(['X', 'O', '', '', '', '', '', '', ''])
  })

  test('The game ends when all 9 fields are filled', () => {
    for(let i = 1; i < game.fields.length; i++){
      game.move(i)
    }
  
    expect(() => {
      game.move(9)
    }).toThrow('Game Over')
  })
})