/* 
Single Linked List

TC: Access	Search	Insertion	Deletion
     O(n)	 O(n)	  O(1)	    O(1) or O(n)

SC: O(n)
*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head=0;
        this.tail=0;
        this.length=0;
    }
    /* Adds to the tail of the linked list */
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head=node;
            this.tail=node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /* Adds to the head of the linked list */
    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head=node;
            this.tail=node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    /* Adds a node with value `val` to the index `position` in the linked list */
    insert(position, val) {
        if(position < 0 || position > this.length) return this;
        if(position === 0) {
            this.unshift(val);
            return this;
        }
        if(position === this.length) {
            this.push(val);
            return this;
        }
        let node = new Node(val);
        let pre = this.get(position-1);
        let post = this.get(position);
        node.next = post;
        pre.next = node;
        this.length++;
        return this;
    }

    /* Removes from the tail of the linked list and returns the removed node*/
    pop() {
        if(!this.length) return undefined;
        let node = this.head;   // 1st item
        let pre = node.next;    // 2nd item
        if(!pre) {              // if there is no 2nd item, return the head
            this.head=0;
            this.tail=0;
            this.length--;
            return node;
        }
        while(pre && pre.next !== null) {
            node=node.next;
            pre=pre.next;
        }
        node.next = null;
        this.tail = node;
        
        this.length--;
        return pre;
    }

    /* Removes from the head of the list and returns the removed node*/
    shift() {
        if(!this.length) return undefined;
        let node = this.head;
        if(node.next) {
            this.head = node.next;
            node.next = null;
            this.length--;
            return node;
        } else {
            this.head = 0;
            this.tail = 0;
            this.length--;
            return node;
        }
    }

    /* Search a node by its value and return if found  */
    search(val) {
        if(!this.length) return undefined;
        let node = this.head;
        if(node.val === val) return node;
        while(node.next) {
            if(node.next.val === val) return node.next;
            node = node.next;
        }
        return undefined;
    }

    /* Search a node by its position and return if found  */
    get(position) {
        if(position < 0 || position > this.length || !this.length) return undefined;
        let i = 0;
        let searchNode = this.head;
        while(i < position) {
            if(searchNode.next === null) return undefined;
            searchNode = searchNode.next;
            i++;
        }
        return searchNode;
    }

    /* Search a node by its index `position`, if found update its value to val.  */
    set(position, val) {
        if(!this.length) return false;
        let node = this.get(position);
        if(node) {
            node.val = val;
            return this;
        } else {
            return false;
        }
    }

    /* Search a node by its index and remove from the list if found and return the list  */
    remove(position) {
        if(position < 0 || position > this.length-1 || !this.length) return undefined;
        if(position===0) {this.shift(); return this;}
        if(position===this.length-1) {this.pop(); return this;}
        // Remove from somewhere in the middle
        let node = this.get(position);
        let pre = this.get(position-1);
        pre.next = node.next;
        this.length--;
        return this;
    }

    /* Reverses the linked list in place */
    /* Do this in O(N) time */
    reverse() {
        if(this.length <= 1) return this;

        // Swap the head & tail pointers
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next=null, prev=null;
        for (let i = 0; i < this.length; i++) {
            // find the node that is next to `node` and save
            next = node.next;
            // set `node.next` to whatever the previous was
            node.next = prev;

            // make `prev` to be `node`
            prev = node;
            // make `node` to be the `next`
            node = next;
        }
        return this;
    }

}

/* var list = new LinkedList();
list.push("A");
list.push("B");
list.push("C"); */
/* console.log(list.pop()); // {"C"}
console.log(list.shift()); // {"A"}
list.unshift("D");
console.log(list.search("B")) // returns {"B"}
console.log(list.search("A")) // returns undefined

console.log(list);// {{"D"},{"B"}}
console.log(list.set(1, "E"));// {{"D"},{"E"}}
console.log(list.get(0)) // returns {"E"}
console.log(list.insert(1, "F")); //{{"D"},{"F"},{"E"}}
console.log(list.insert(0, "G")); //{{"G"},{"D"},{"F"},{"E"}}
console.log(list.insert(5, "H")); //{{"G"},{"D"},{"F"},{"E"}} //won't insert
console.log(list.insert(4, "H")); //{{"G"},{"D"},{"F"},{"E"},{"H"}}
console.log(list.remove(2)); //{{"G"},{"D"},{"E"},{"H"}} */
//console.log(list.reverse()); //{{"H"},{"E"},{"D"},{"G"}}

export default LinkedList;