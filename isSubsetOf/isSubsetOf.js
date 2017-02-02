/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.js  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
//// we can use this as context array 
	for (var i = 0; i < this.length; i++) {
	/// then check if the input array which is here (arr) includes any element  from the context array 
	if(arr.includes(this[i])){
		return true 
	}
	else {
		return false 
	}
	}

}