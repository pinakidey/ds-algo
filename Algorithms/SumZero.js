/* 
Given a non-empty sorted array of integers, find the first two elements {a, b} whose sum is zero.
Return [a, b] or undefined if no such pair is found
Array.length >= 2
*/

/* O(N) */
function sumZero(A) {
    // Uses Multiple Pointer Pattern
    let s = 0 
    let l = A.length - 1

    if(A[s]+A[l]<0) return undefined

    while(s < l) {
        if(A[s]+A[l]===0) return [A[s], A[l]]
        if(A[s]+A[l]>0) l--
        if(A[s]+A[l]<0) s++
    }
    return undefined
}

console.log(sumZero([-4,-3,-2,-1,2,3,5,6,7,8,9,10,11])) // [-3, 3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([-2,0])) // undefined