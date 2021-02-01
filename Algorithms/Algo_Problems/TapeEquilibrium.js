// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

/* 
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/

/* O(N) Solution */
// First calculate the sum of all elements
// then use a running sum for each array index to calculate the sum of both sub-arrays at each index.

function solution(A=[]) {
    const startTime = new Date();
    let sumAllElements = 0;
    // Calculate sum of all elements
    for(i=0; i<A.length; i++) {
      sumAllElements += A[i];
    }
   
    let minDifference = Number.MAX_VALUE;
    let currentDifference = Number.MAX_VALUE;
    let sumFirstPart = 0;
    let sumSecondPart = 0;

    // At each index compute the sum of left side and right side
    for(p=0; p<A.length-1; p++) {
      sumFirstPart += A[p];
      sumSecondPart = sumAllElements - sumFirstPart;
      currentDifference = Math.abs(sumFirstPart - sumSecondPart);
      minDifference = Math.min(currentDifference, minDifference);
    }
    console.log(`Execution time: ${Date.now() - startTime}ms`)
    return minDifference;
}

/* O(N * N) VERY BAD*/
function solutionBad(A=[]) {
    const startTime = new Date();
    let P = 1;
    const N = A.length;
    let minDiff = Number.MAX_SAFE_INTEGER;
    while(P < N) {
        let diff = 0;
        diff = Math.abs(findSum(A, 0, P) - findSum(A, P, N));
        if(diff < minDiff) minDiff = diff;
        P++;
    }
    console.log(`Execution time: ${Date.now() - startTime}ms`)
    return minDiff;
}

function findSum(A, start, end) {
    /* const sum = A.slice(start, end).reduce((a,b) => a + b, 0); // end included
    //console.log(`A[${start}] - A[${end}] => ${sum}`);
    return sum; */

    // Following is faster
    let sum = 0;
    let i = start;
    while(i < end) {
        sum += A[i];
        i++;
    }
    return sum;
}

const input = [];
for(i=0; i<10000000; i++) {
    input.push(Math.round(Math.random()*99));
}
console.log(solution(input));
//console.log(solution([3,1,2,4,3]));