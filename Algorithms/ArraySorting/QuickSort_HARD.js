import {getRandomArray} from "../lib/utils.js";
/* 
    Strategy: Works by selecting one element (called 'pivot') 
        and finding the index where the pivot should end up in the sorted array 
        (that will place the value at pivot at its correct index.).
        
        Basically, move all the numbers that are less than (or equal to) the pivot to its left
        and all the numbers that are greater to its right. 
        Do this in encouter order, no need to think about the right place for the encountered numbers.
    
    TC: Worst/Avg/Best - O(n^2)/O(nlogn)/O(nlogn)
    SC: O(n)
*/

/* 
Implementation:
Given an array [4,7,2,9,1,33,3] 

Start with i=0, count=0 //(count = how many values should go to the left of A[i])
So for, A[0] which is 4; 2 is the first lesser value. So count++. Swap A[i+count] with 2. A=[4,2,7,9,1,33,3]
Next, 1 is the lesser value. count++. Swap A[i+count] with 1. A=[4,2,1,9,7,33,3]
Next, 3 is the lesser value. count++. Swap A[i+count] with 3. A=[4,2,1,3,7,33,9]
When all items are checked, count is 3. That means 3 items found that are lesser than 4.
Swap A[i] with A[3]. A=[3,2,1,4,7,33,9]
That puts 4 at its correct index in the eventually sorted index.
Increase i. Loop again.
*/


/* Returns the deserved index/position of the pivot arr[start]*/
function pivot(arr=[], start=0, end=arr.length-1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start+1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, start);
    return swapIndex;
}


function quicksort(A=[], left=0, right=A.length-1) {
    //if(A.length<=1) return A;
    if(left<right) {
        let pivotIndex = pivot(A, left, right);
        quicksort(A, left, pivotIndex-1);
        quicksort(A, pivotIndex+1, right);
    }
    return A;
}

const swap = (A, i, j) => {
    return [A[i], A[j]] = [A[j], A[i]];
}

console.log(quicksort(getRandomArray(15)));