/* 
    Bubble Sort: Compares two adjacent elements and Swaps, thus moving the higher value towards the end. 
    Usually iterates over each element even if the array is sorted. 
    Improvement: Check if there was a swap in last outer loop iteration. If none, break.
    
    TC: Worst/Avg/Best - O(N^2)/O(N^2)/O(N)
    SC: O(1)
    Usage: For nearly sorted array
*/

function sort(A=[]) {
    if (A.length===0) return A;
    let noSwaps = false;
    for(let i=A.length; i>0; i--) {
        noSwaps = true;
        for (let j=0; j<i-1; j++) {
            console.log(A, A[j], A[j+1]);
            if(A[j] > A[j+1]) {
                let temp = A[j];
                A[j] = A[j+1];
                A[j+1] = temp;
                noSwaps=false;
            }
        }
        console.log("ONE PASS COMPLETE");
        if(noSwaps) {
            console.log("BREAK");
            break;
        }
    }
    return A;
}


console.log(sort([7,1,2,3,4,5,6]))