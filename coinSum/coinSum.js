/*
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of ways to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

function coinCombination(n){
	var value=n 
	var count=0
	var x
//1×(1) + 1×(50) + 2×(20) + 1×(5) + 1×(2) + 3×(1)
var kindofcoins=[1,2,5,10,20,50,100,200]

for(var i=0;i<kindofcoins.length;i++){
	for(j=kindofcoins[i];j<value;j++){
		x=(j-kindofcoins[i])
		count ++
	}
	return count 
}

}