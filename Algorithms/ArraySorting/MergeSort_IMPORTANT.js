/* 
Strategy: Split the array in half recursively, and merge
TC: Worst/Avg/Best - O(nlogn)
SC: O(n)
*/


import {getRandomArray} from "../lib/utils.js";

/* These method merges two already sorted array into one sorted array */
function merge(A=[], B=[]) { //O(N) comparisona
    let i=0, j=0, C=[];
    while(i<A.length && j<B.length) {
        if(A[i] < B[j]) {
            C.push(A[i++])
        } else (
            C.push(B[j++])
        )
    }
    // Push the rest of the elements
    while(i<A.length) {
        C.push(A[i++])
    }
    while(j<B.length) {
        C.push(B[j++])
    }
    return C;
}

function sort(A) { //O(logN) splits
    if(A.length <=1) return A;
    let mid = Math.floor(A.length/2);
    let left = A.slice(0, mid);
    let right = A.slice(mid);

    return merge(sort(left), sort(right));
}

console.log(sort(getRandomArray(15)));