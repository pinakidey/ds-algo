/* 
Given a sorted array A of length N, find the index of K in A
*/

/* Binary Search : Divide & Conquer */


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
console.log(search([1,2,3,4,5,6,7,8,9], 11))
console.log(search([1,2,3,4,5,6,7,8,9], 7))