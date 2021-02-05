import LinkedList from "../LinkedList/Single_Linked_List.js";

/* 
    Implement a Queue (FIFO) using LinkedList
*/

/* We can reuse existing LinkedList implementation like this */
/* class Queue extends LinkedList {
    constructor(){
        super();
    }
} */

/* We can create Queue implementation backed by a LinkedList only having push()/pop() */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = 0;
        this.last = 0;
        this.size = 0;
    }

    /* Queue.enqueue()/dequeue() needs to be constant-time O(1) */

   /**
    * Adds a node to the end of the Queue and return the size of the updated Queue.
    * @param {any} val value to add
    * @returns {number} size of the updated Queue
    */
   enqueue(val) {
        let node = new Node(val);
        if(!this.last) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;    
        }
        return ++this.size;
    }

    /**
    * Removes a node from the beginning of the Queue and returns the node.
    * @returns {Node} removed node
    */
   dequeue() {
        let node = this.first;
        if(!this.size) return null;
        if(node) {
            this.first = node.next;
            node.next = null;
        }
        this.size--;
        return node;
    }
}



var queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");

console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());