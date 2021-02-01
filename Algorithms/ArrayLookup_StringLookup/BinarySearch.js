/* 
Given a sorted array A of integers of length N, find the index of K in A, 
without using Arrya.prototype methods
*/

/* Binary Search : Divide & Conquer with Recursion */

/* O(logN) */
function search(A, K, start=0) {
    if(A.length === 0) return -1;
    let mid = Math.floor(A.length/2);

    if(A[mid] === K) return start+mid;
    if(mid === 0) return -1;
    if(K < A[mid]) {
        return search(A.slice(0, mid), K, 0);
    }
    if(K > A[mid]) {
        return search(A.slice(mid, A.length), K, start+mid);
    }
}

/* Using Multiple Pointers */
function search2(A, K) {
    let l=0, mid=0;

    while(A.length > 0) {
        // Find middle
        mid = Math.floor(A.length/2);
        // Compare middle
        if(A[mid] === K) return l+mid;
        if(mid === 0) return -1;
        // Search left
        if(K < A[mid]) {
            A = A.slice(0, mid);
        }
        // Search right
        if(K > A[mid]) {
            l += mid;
            A = A.slice(mid);
        }
    }
    return -1;
}

//console.log(search2([1,2,3,4,5,6,7,8,9], 9))
console.log(search2([1,2,3,4,5,6,7,8,9], 1))