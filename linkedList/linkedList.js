/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	this.head
	this.tail
};

LinkedList.prototype.Node = function(value) {

	this.value = value;
	this.next = null;

};

LinkedList.prototype.addToTail=function(value){
	if(this.head===null){
		this.head=this.Node(value)
		this.tail=this.head
	}
	this.tail=this.Node(value)
	this.tail.next=this.tail
};


LinkedList.prototype.removeHead=function(){
	var hea=this.head.value
	if(this.head!==null){
		this.head=this.head.next
	}
	return hea
};




LinkedList.prototype.contains=function(x){
	if (this.head.value===x){
		return true
	}
	this.head=this.head.next

}
return false 
};







