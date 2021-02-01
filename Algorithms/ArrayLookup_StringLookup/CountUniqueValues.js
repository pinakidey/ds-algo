/* 
Given a sorted array A, count the unique values in A.
A may contain -ve numbers.

*/

/* Solution using Frequency Counter */
/* O(2N) */
function countUnique(A) {
    let counter = {};

    for(let val of A) counter[val] = ++counter[val] || 1;

    let uniqueValues = [];
    let keys = Object.keys(counter);

    for(let key of keys) {
        if(counter[key] === 1) {
            uniqueValues.push(parseInt(key))
        }
    }

    return uniqueValues.length;
}

/* Solution using Multiple Pointer */
/* Use pointers when problem mentions "Sorted array" */
/* O(N) */
function countUniqueOptimum(A) {

    if(A.length === 0) return 0;

    let l = 0, r = 1
    
    while(r < A.length) {
        if(A[l] === A[r]) { // if items are equal, move right pointer keeping left pointer same
            r++;
        }  else { // If different, move left pointer, replace A[l] with A[r], move r 
            A[++l] = A[r++];
        }        
    }
    return l+1;
}

console.log(countUniqueOptimum([1,2,3,4,5,5,6,7]))