
/* 
Algorithm		Average	    Worst case
Space		    O(n)	    O(n)
Search		    O(n)	    O(n)
Find        	O(1)	    O(1)        // always the root
Insert		    O(1)	    O(log n)    // due to bubble up
Remove	        O(log n)	O(log n)    // due to bubble down
*/

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/**
 * A Priority Queue (which is also a MinBinaryHeap) implementation backed by an array.
 * 
 * @description 
 * - Nodes having lower `priority` are put above the nodes having higher `priority`.
 * - Value of Nodes doesn't affect their position in the heap.
 */
class PriorityQueue {
    constructor(values=[]){
        this.values = values;
    }

    
    /**
     * Enqueues a Node(val, priority) into the PriorityQueue.
     * 
     * @param {any} val 
     * @param {number} priority 
     * @returns {PriorityQueue} the updated PriorityQueue
     * @description TC: O(1) ~ O(logn)
     */
    enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);

        //Bubble-up
        let L = this.values.length;
        let i = L-1;
        while(i>0) {
            let parentIndex = Math.floor((i-1)/2);
            let parent = this.values[parentIndex];
            if(node.priority >= parent.priority) break;
            swap(this.values, i, parentIndex);
            i = parentIndex;
        }
        return this;
    }

    /**
     * Dequeues the first/root Node(val, priority), which would always have the least `priority` value, from the PriorityQueue and returns the removed item.
     *  
     * @returns {Node} the removed node
     * @description TC: O(logn)
     */
    dequeue(){
        let L = this.values.length;
        if(L===1) {
            // There is only 1 item, so remove & return that
            return this.values.pop();
        }

        // Save the root to return
        let nodeToReturn = this.values[0];
        // Replace the root node with the last node
        this.values[0] = this.values[L-1];
        // Dispose the last node
        this.values.pop();
        L = this.values.length;
        
        // Bubble-down
        let i = 0;
        let node = this.values[i];
        while(i<L) {
            let child1Idx = 2*i+1;
            let child2Idx = child1Idx+1;
            let child1 = child1Idx < L ? this.values[child1Idx] : {};
            let child2 = child2Idx < L ? this.values[child2Idx] : {};
            if(node.priority > child1.priority || node.priority > child2.priority) {
                if(child1.priority < child2.priority) {
                    swap(this.values, i, child1Idx);
                    i=child1Idx;
                } else {
                    swap(this.values, i, child2Idx);
                    i=child2Idx;
                }
            } else {
                break;
            }
        }
        return nodeToReturn;
    }
}

const swap = (A, i=0, j=0) => {
    return [A[i], A[j]] = [A[j], A[i]];
}

var queue = new PriorityQueue();

queue.enqueue("word", 1).enqueue("vscode", 0)
.enqueue("excel", 1).enqueue("powerpoint", 2)
.enqueue("netbeans", 0).enqueue("chrome", 0)
.enqueue("firefox", 3).enqueue("ie", 99);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
