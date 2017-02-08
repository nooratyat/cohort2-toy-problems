/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

<<<<<<< HEAD

var myBoard = makeBoard(5);
var robotPaths = function(myBoard) {

  var count = 0;

  var findPaths = function (i, j) {
    if (i === n - 1 && j === n - 1) {
    return count++;
    
    }
   
    if (myBoard.hasBeenVisited(i, j)) {
    
      myboard.togglePiece(i, j);
      // right
      findPaths(i, j + 1);
      //  down
      findPaths(i + 1, j);
      //  left
      findPaths(i, j - 1);
      // g up
      findPaths(i - 1, j);
      // toggle the piece back
     myboard.togglePiece(i, j);
    }
  

  findPaths(0, 0);
  return count;
};

 

/// i use google to help me find the answer !!
=======
var robotPaths = function(myBoard) {
 
}

>>>>>>> 551c0ed41d181ca0915bb8fe20dd8ced3bdec13b
      










