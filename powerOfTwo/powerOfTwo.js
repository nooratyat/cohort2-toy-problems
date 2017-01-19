/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/
/// must divide 1000 in many parts
var powerOfTwo = function(num){
    var y=Math.pow(2,num)
    var arr= y.split("")
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum += parseInt(arr[i],10); 
    }
    return sum
}