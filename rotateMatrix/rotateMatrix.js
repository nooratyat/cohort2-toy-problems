/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
<<<<<<< HEAD
 *  ['F','B',7,3]
=======
 *  ['F','B',7,3],
>>>>>>> 1337768aeb5d682fb6643a9f52b37165938d4930
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix =function (matrix) {
<<<<<<< HEAD
	for (var i = 0; i < matrix.length; i++) {
		for (var j= 0; j < matrix[i].length; j++) {
		var x= matrix[i][j]
	    matrix[i][j]=matrix[matrix.length-1-j][i]
		matrix[matrix.length-1-j][i]=matrix[matrix.length-1-i][matrix.length-1-j]
	   matrix[matrix.length-1-i][matrix.length-1-j] = matrix[j][matrix.length-1-i];
       matrix[j][matrix.length-1-i] = x;

		}
	
	}
	return matrix;
	
}


           
         
           







=======
	
}
>>>>>>> 1337768aeb5d682fb6643a9f52b37165938d4930
///////////////////