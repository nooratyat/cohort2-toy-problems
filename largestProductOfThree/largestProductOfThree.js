/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var newarr=[];
	var total;
	for (var i = 0; i < array.length; i++) {
	array.splice(newarr.push( Math.max(array)))
	 }

  for (var i = 0; i < newarr.length; i++) {
  	total*=newarr[i]
  }
  return total;
	
};

////// OR

var largestProductOfThree = function(array) {
	var total;
		i=0;
 var newarr=array.sort(function(a, b){return b - a});

	while(i <=3){
	total*=newarr[i]
	i--
	}
  return total;
	
};








