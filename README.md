# Try our Tic Tac Toe Tech Test!
This is a very common tech test as it demonstrates a candidate's knowledge of basic data structures.

## The brief
The rules of tic tac toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.


## Planning
### User stories
```
I would like to be able to play with 1 other person
```
```
I would like to take turns with the 1 other person
```
```
I would like to be able to claim any field that is unclaimed
```
```
Once I have claimed a field I'd like the other play to have a turn
```
```
If I have 3 in a row I want to be notified that I have won and the game ends
```
```
If no one wins I'd like the game to end and be notified
```

### Initial ideas
```
fields = [empty, empty, empty, empty, empty, empty, empty, empty, empty]
player1.move(5)
fields - [empty, empty, empty, empty, X, empty, empty, empty, empty]
player2.move(4)
fields = [empty, empty, empty, O, X, empty, empty, empty, empty]

To win would need the following:
> 1, 2, 3 
> 4, 5, 6 
> 7, 8, 9 
> 1, 4, 7
> 2, 5, 8
> 3, 6, 9
> 1, 5, 9
> 3, 5, 9
This could be implemented into a web app by each field in the array matching an id of a html element
