/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var array=[];
	/// for right
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j< matrix.length; j++) {
				matrix.shift(array.push(matrix[i][j]])
						}
	
	}

	//// for down
	 // and the matrix length will bd changed after shifting 
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix.length; j++) {
			matrix.shift(array.push(matrix[j][i]))
		}
	
	}

   ////for left
   for (var i = 0; i <matrix.length; i++) {
   	for (var j = matrix.length; j > matrix.length; j--) {
   	    matrix.shift(array.push(matrix[i][j]))
   	} 	
    } 
/// for up
    for (var i = 0; i < matrix.length; i++) {
    	for (var j = matrix.length ; j > matrix.length; j--) {
    		matrix.shift(array.push(matrix[j][i]))
    	}
    }

};