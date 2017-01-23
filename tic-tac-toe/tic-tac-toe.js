/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
<<<<<<< HEAD
	var x=[];
	var o=[];
	//if a row or coloumn or diagonal has both 1 & 2 return -1
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if{
				(board[i][j].includes(1)||board[i][j].includes(2) )&&(board[i][i].includes(1)|| board[i][i].includes(2))&&
				(board[j][i].includes(1) || board[j][i]includes(2))

				return -1
			}

			if(board[i][j]===1 || board[i][i]===1 || board[j][i]===1){
				x.push(1)
			}
			if(board[i][j]===2 || board[i][i]===2 || board[j][i]===2)
				o.push(2)

		}

	}
	//if every ele in x is 1 =>x is won 
	if(x_.every(function(value, index, array){
		return value === array[0];
	})){return "X IS won"};	 

		if(o_.every(function(value, index, array){
			return value === array[0];
		})){return "O IS won"};	 

	}




=======
	
};
>>>>>>> 42a961f95ede9dc34c2125c99e247e9b7bf32aad
