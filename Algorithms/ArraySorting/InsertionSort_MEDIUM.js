/* 
    Insertion Sort: Builds up the sort by gradually creating a larger left half which is always sorted. 
    Logic: Iterate the full array, for each element 
        decide where it should be placed in the left hand part, 
        while keeping the left side sorted. Insert. Repeat.
    
    TC: Worst/Avg/Best - O(N^2)/O(N^2)/O(N)
    SC: O(1) 
    Usage: Usefull/performs well, if the array is nearly sorted,
        or there is incoming streaming data & you just want to put it at its place.
*/

function sort(A=[]) {
    const L=A.length;
    if (L===0) return A;
    let i=0, j=0;

    for(i=0; i<L; i++) {
        let currentVal = A[i];
        for (j=i-1; j>=0 && A[j] > currentVal; j--) {
            A[j+1] = A[j]; // instead of swapping, just copy the value to its next index.
        }
        A[j+1] = currentVal;
    }
    return A;
}

console.log(sort([1,2,15,9,76,4]));

/* 
Explaination:
Instead of thinking from the start of the array, think from in beetween or the end of the array.
Take i=5 for example.
currentValue becomes 4.
if A[j] which is 76 is higher than currentValue (4), instead of swapping just make A[i] 76 as well.
At this point array contains two 76 value. 4 is kept in currentValue.
Then loop down the array and find the index j for which A[j] > currentValue is false or till the start of the array.
It means, j+1 would then be the right place for 4.

*/