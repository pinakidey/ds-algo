/* 
Doubly Linked List
More flexibility but require more memory.

TC: Access	Search	Insertion	Deletion
     O(n)	 O(n)	  O(1)	     O(1)

SC: O(n)
*/


class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
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
            node.prev = this.tail;
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
        let post = pre.next;
        pre.next = node;
        node.prev = pre;
        node.next = post;
        if(post) post.prev = node;
        this.length++;
        return this;
    }

    /* Removes from the tail of the linked list and returns the removed node*/
    pop() {
        if(!this.length) return undefined;
        let node = this.tail; //store the current tail to return later

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let pre = this.tail.prev; // the node prev to tail
            pre.next = null;
            this.tail = pre; // pre becomes the new tail
        }
        
        this.length--;
        node.next = null;
        node.prev = null;
        return node;
    }

    /* Removes from the head of the list and returns the removed node*/
    shift() {
        if(!this.length) return undefined;
        let node = this.head;
        this.head = node.next;

        this.length--;
        node.next = null;
        node.prev = null;
        return node;
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
    // THIS IS THE MOST IMPORTANT METHOD IN THIS CLASS
    get(position) {
        if(position < 0 || position >= this.length || !this.length) return undefined;
        // decide the starting point to start searching
        let i = (this.length - position) < position ? this.length - 1 : 0;
        let searchNode = i===0 ? this.head : this.tail;
        if(i===0) {
            while(i < position) {
                if(searchNode.next === null) return undefined;
                searchNode = searchNode.next;
                i++;
            }
        } else {
            while(i > position) {
                if(searchNode.prev === null) return undefined;
                searchNode = searchNode.prev;
                i--;
            }
        }
        
        return searchNode;
    }

    /* Search a node by its index `position`, 
        if found update its value to val and return the new list, else return false  
    */
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
        let pre = node.prev;
        let post = node.next;
        pre.next = post;
        if(post) post.prev = pre;
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
            node.prev = next; // only difference with SingleLinkedList:reverse()

            // make `prev` to be `node`
            prev = node;
            // make `node` to be the `next`
            node = next;
        }
        return this;
    }

}

var list = new LinkedList();
list.push("A");
list.push("B");
list.push("C");
/* Result matches when only the corressponding line is un-commented */
//console.log(list); // {{A},{B},{C}}
//console.log(list.get(2)); // {C}
//console.log(list.pop()); //{C}
//console.log(list); // {{A},{B}}
//console.log(list.shift()); //{A}
//console.log(list.unshift("A")); //{{A},{B}}
//list.set(2, "D");
//console.log(list); // {{A},{B},{D}}
//console.log(list.remove(1)); //{{A},{C}}
console.log(list.reverse()); //{{C},{B},{A}}
//console.log(list.insert(1, "D")); //{{A},{D},{B},{C}}
//console.log(list.search("C")); //{C}

