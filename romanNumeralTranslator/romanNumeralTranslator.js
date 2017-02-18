
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

<<<<<<< HEAD
 var translateRomanNumeral = function(romanNumeral){
 	var DIGIT_VALUES = {
 		I: 1,
 		V: 5,
 		X: 10,
 		L: 50,
 		C: 100,
 		D: 500,
 		M: 1000
 	};
 	var sum=0;
 	if(romanNumeral === "I" || "V"||  "X" || "L" || "C" || "D" ||"M" ){

 		for (var i = 0; i < romanNumeral.length; i++) {
 			if(DIGIT_VALUES[romanNumeral[i]]>DIGIT_VALUES[romanNumeral[i]]){
 				sum+=DIGIT_VALUES[romanNumeral[i]]
 			}
 			sum-=DIGIT_VALUES[romanNumeral[i]]
 			
 		}

 		return sum 
 	}
 	return null
 }
=======
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
