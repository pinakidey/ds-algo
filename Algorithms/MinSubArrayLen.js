/* DIFFICULT
Write a function F which accepts two parameters A, N.
A is an Aay of positive integers (not sorted).
F returns the minimal length of CONTIGUOUS subAay of which 
the sum is greater than or equal to N.
Return 0 if none found.

F([2,1,6,5,4], 9) => 2 //[5,4]
*/



function minSubAayLen (A, N) {
    if (A.length < 2) return null
   
    let l = 0, r = 0
    let minLen = 0, tempLen, tempSum = A[l]
   
    while (r < A.length) {
      if (tempSum < N) {
        r++
        if (A[r]) tempSum += A[r]
      } else {
            tempLen = r - l + 1
            minLen = minLen ? Math.min(minLen, tempLen) : tempLen
            if (minLen === 1) return 1
            tempSum -= A[l]
            l++
      }
    }
    return minLen
  }

console.log(minSubAayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log(minSubAayLen([1,4,16,22,30,1,1,40,10], 39))
console.log(minSubAayLen([1,4,16,22,5,7,8,9,10], 55))
