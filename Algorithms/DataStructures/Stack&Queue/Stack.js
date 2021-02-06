import LinkedList from "./../LinkedList/Single_Linked_List.js";

/* 
    Implement a Stack (LIFO) using LinkedList
*/

/* We can reuse existing LinkedList implementation like this */
/* class Stack extends LinkedList {
    constructor(){
        super();
    }
} */

/* We can create Stack implementation backed by a LinkedList only having push()/pop() */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * Single-LinkedList implelemtation of Stack
 * Time complexity: Insertion/Removal: O(1), Search/Access: O(N)
 */
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /* In SingleLinkedList pop() is not constant-time. Stack.pop()/push() needs to be constant-time */
    /* 
        So instead of adding/removing to/from the end of the list,
        we will add/remove to/from the beginning of the list 
    */
   /**
    * Adds a node to the beginning of the Stack and return the size of the updated stack.
    * @param {any} val value to add
    * @returns {number} size of the updated stack
    */
    push(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        return ++this.size;
    }

    /**
    * Removes a node from the beginning of the Stack and returns the node.
    * @returns {Node} removed node
    */
    pop() {
        let node = this.first;
        this.first = node.next;
        node.next = null;
        this.size--;
        return node;
    }

}



var stack = new Stack();
stack.push("A");
stack.push("B");

stack.pop();
console.log(stack);