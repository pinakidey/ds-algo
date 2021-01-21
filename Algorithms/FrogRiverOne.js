// Find the earliest time when a frog can jump to the other side of a river.

/* 
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
*/
/* O(N) */
function solution(X=0, A=[]) {
    const N = A.length;
    if(X === 0 || N === 0) {
        return -1;
    }

    // Create and array B[pointX] = Time taken for a leaf to fall at pointX 

    const B = [];
    let i = 0;
    while(i < N) {
        let point = A[i];
        if(point && (B[point] === undefined || B[point] > i)) B[point] = i; 
        i++;
    }

    //console.log(B);

    // Find the Max(...B). B[1] ... B[X] all must exist
    let max = -1;
    for(i=1; i<=X; i++) {
        if(B[i] === undefined) return -1;
        if(B[i] > max) max = B[i];
    }
    return max;
}

/* CORRECTNESS TESTS */
const A1 = [1,3,1,4,2,3,5,4], X1= 5;
const A2 = [1,3,1,4,2,3,5,4], X2= 0;
const A3 = [2, 2, 2, 2, 2], X3= 2;
const A4 = [1,3,1,4,2,3,5,4], X4= null;
const A5 = [1,3,1,4,2,3,5,4], X5= 100;
const A6 = [1], X6= 1;
console.log(solution(X1, A1)); // should return 6
console.log(solution(X2, A2)); // should return -1
console.log(solution(X3, A3)); // should return -1
console.log(solution(X5, A4)); // should return -1
console.log(solution(X5, A5)); // should return -1
console.log(solution(X6, A6)); // should return 0

/* PERFORMANCE TESTS */
/* let B=[], Y=0;
const load = 1000000;
for(i=0; i<load; i++) {
    B.push(Math.round(Math.random()*(100-1)+1));
}
Y = Math.round(Math.random()*(load-1)+1);

console.log(Y, B);

const startTime = new Date();
console.log(solution(Y, B));
console.log(`Execution time: ${Date.now() - startTime}ms`); // Test with 1M random ints took <25ms

 */






















