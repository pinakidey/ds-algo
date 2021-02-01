// Check whether array A is a permutation.

/* 
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

/* O(N) or O(N * log(N)) */
function solution(A=[]) {
    const set = new Set(A);
    if(set.size != A.length) return 0;

    let value = 1;
    while(set.has(value)) {
        value++;
    }
    return --value == A.length ? 1 : 0;
}


/* CORRECTNESS TESTS */
const A1 = [4,1,3,2];
const A2 = [4,1,3];
console.log(solution(A1));
console.log(solution(A2));

/* PERFORMANCE TESTS */
console.log(solution(Array.from({length: 10000000}, (_, i) => i + 1)));




















