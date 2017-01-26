/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {
//// must divide the array such we have minindex  ,maxindex  and middelindex and make the search in each part
/// compare the target with middel in sorted array 
var min = 0;
var max = array.length - 1;
var middel;
var Element;

while (min <= max) {
	middel = (min + max) / 2 ;
	Element = array[middel];

	if (Element < target ) {
		min = middel + 1;
	}
	else if (Element > target ) {
		max = middel - 1;
	}
	else {
		return middel;
	}
}

return -1;
}
