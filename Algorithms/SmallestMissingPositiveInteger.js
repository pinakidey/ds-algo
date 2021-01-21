/* Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */

//Ruby: ((1..arr.count+1).to_a - arr)[0]

function solution(A) {
    const set = new Set(A);
    let minPositive = 1;
    while(set.has(minPositive)) {
        minPositive++;
    }
    return minPositive;
}

const testArray1 =  [9, 3, 6, 4, 1, 2]; // should return 5
const testArray2 =  [1, 2, 3]; // should return 4
const testArray3 =  [-1, -3]; // should return 1
const testArray4 =  [0]; // should return 1
const testArray5 =  [null]; // should return 1

console.log(solution(testArray1));
console.log(solution(testArray2));
console.log(solution(testArray3));
console.log(solution(testArray4));
console.log(solution(testArray5));
