/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
    this.stack=[];
  //this.count=0

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value)
  };

   // remove an item from the top of the stack
   this.pop = function(){
    this.stack.pop()
  };

   // return the number of items in the stack
   this.size = function(){
    this.stack.length

  };
};

 /**
   * Queue Class
   */
   var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     inbox.push(value)
   }
 };

   // called to remove an item from the `queue`
   this.dequeue = function(){
//// we need to reverse the inbox stack by pop each element then push it in empty stack which is output stack 

     if(outbox.size()===0){
      if(inbox.size()!==0){
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  }
};

   // should return the number of items in the queue
   this.size = function(){
    inpox.size()
  };
};