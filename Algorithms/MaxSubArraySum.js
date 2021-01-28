
/* 
Given an array of integers A, and positive number n,
calculate the maximum sum of n consecutive elements in A.
A may contain -ve items as well
*/


/// Use Sliding Window pattern
/* O(N) */
function maxSubArraySum(A, n) {
    if(!n || A.length===0 || A.length < n) return null;

    // Calculate the sum of A[0] to A[n]. That's our Window
    let max = A.slice(0,n).reduce((a, b) => a + b, 0); //O(n)

    // Next, starting slide the window one element at a time. End of window (i) should not cross A.length
    let sum = max;
    for (let i = n; i < A.length; i++) { // next, start a window from n
        sum = sum - A[i-n] + A[i];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2))

console.log(maxSubArraySum([1,2,5,2,8,1,5], 4))