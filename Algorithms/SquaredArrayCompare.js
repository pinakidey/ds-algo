// Check if B[] contains all values of A[] but squared, returns bool

/* 
Assumptions
- sequencial comparison
- no null element
- same size
*/

/* O(n) */
function sameInOrder(A, B) {
    let result = true;
    for(i=0; i<A.length; i++) {
        if(B[i] !== Math.pow(A[i], 2)) return false;
    }
    return result;
}

/* 
Assumptions
- order doesn't matter
- freuqency needs to be same
- no null element
- same size
*/

// Use frequency counter pattern, loop over each array once

/* O(3N) => O(N) */
function sameIgnoreOrderPreserveFreq(A, B) {
    let counterA = {}
    let counterB = {}
    // create a frequency counter object for each array 
    for(let val of A) counterA[val] = ++counterA[val] || 1
    for(let val of B) counterB[val] = ++counterB[val] || 1

    for(let key in counterA) {
        if(!(key**2 in counterB)) return false; // check if squared value exists
        if(counterB[key**2] !== counterA[key]) return false; // check if count(squared value) = count(value)
    }

    return true;

}

console.log(sameIgnoreOrderPreserveFreq([1,2,3,4,5], [16,1,4,25,9]));