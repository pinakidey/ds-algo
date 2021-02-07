
/* 
Algorithm		Average	    Worst case
Space		    O(n)	    O(n)
Search		    O(n)	    O(n)
Insert		    O(1)	    O(log n)    // due to bubble up
Find-min/mx		O(1)	    O(1)        // always the root
Remove-min/max	O(log n)	O(log n)    // due to bubble down

*/



/**
 * A Max Binary Heap implemention backed by an array.
 * 
 * @description
 * - If the parent node is located at index n, its two child nodes would be at [2n+1] and [2n+2]
 * - If a node is located at index n, its parent's index would be Floor((n-1)/2)
 */
class MaxBinaryHeap {
    constructor(values=[]) {
        this.values = values;
    }

    /**
     * Insert a value in to the heap.
     * @param {number} val - value to enter into the heap
     * @returns updated heap
     * @description Pushes the item at the end of the array and bubble up to the correct position.
     * @summary O(1) ~ O(logN)
     */
    insert(val) {
        this.values.push(val);
        let i = this.values.length-1;
        
        /* DON'T use a while loop to compare with every other value. That will make insert() O(N) */
        // Find the parent position, i.e. Floor(i-1)2 and compare values & swap if needed, repeat. 
        // Takes O(logN) in worst case
        while(i>0) {
            let parentIndex = Math.floor((i-1)/2);
            if(val <= this.values[parentIndex]) break;
            swap(this.values, i, parentIndex);
            i = parentIndex;
        }
        return this;    
    }

    /**
     * Removes the max value (i.e. the root) from the heap
     * 
     * @returns the updated heap
     * 
     * @description Steps:
     * - Remove the root
     * - Replace with th most recently added
     * - Adjust (bubble-down)
     */
    remove() {
        // Remove the root & Put the last item as root
        // Do this efficiently without shifting the array
        this.values[0] = this.values[this.values.length-1]; // Swapped root with the last item
        this.values.pop(); //dispose the last item

        // Now bubble down the new root to its correct position
        let idx = 0;
        let val = this.values[0];
        let L = this.values.length;
        while(idx<L-1) {
            let child1Idx = 2*idx + 1;
            let child2Idx = child1Idx + 1;
            let child1 = child1Idx < L ? this.values[child1Idx] : null;
            let child2 = child2Idx < L ? this.values[child2Idx] : null;
            if(val < child1 || val < child2) {
                if(child1 > child2) {
                    swap(this.values, idx, child1Idx);
                    idx = child1Idx;
                } else {
                    swap(this.values, idx, child2Idx);
                    idx = child2Idx;
                }
            } else {
                break;
            }
        }
        return this;
    }
}

const swap = (A, i=0, j=0) => {
    return [A[i], A[j]] = [A[j], A[i]];
}


var heap = new MaxBinaryHeap([41,39,33,18,27,12]);

heap.insert(40).insert(0).insert(1).insert(55)
console.log(heap);
heap.remove().remove().remove().remove().remove().remove().remove().remove().remove().remove();
console.log(heap);