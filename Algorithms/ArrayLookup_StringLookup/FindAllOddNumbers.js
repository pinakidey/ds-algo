/* 
    Given an array of integers return an array of all odd integers found in the first array.
    If none found, return an empty array. 
*/


/* Helper function */
function findAllOddNumbers(A=[]) {
    if(A.length === 0) return [];
    let result = [];
    function findOdd(A) {
        if(A.length === 0) return;
        if(A[0] % 2 !== 0) {
            result.push(A[0]);
        }
        return findOdd(A.slice(1));
    }
    findOdd(A);
    return result;
}

/* Using Pure Recursion (faster) */
function findOddsPure(A=[], result=[]) {
    if(A.length === 0) return result;
    if(A[0]%2 !== 0) result.push(A[0]);
    return findOddsPure(A.slice(1), result);
}

let input = [2,4,5,6,8,7,8,4,0,6,9,4,1,2,5,8,6,99];
console.time("findAllOddNumbers");
console.log(findAllOddNumbers(input));
console.timeEnd("findAllOddNumbers");

console.time("findOddsPure");
console.log(findOddsPure(input));
console.timeEnd("findOddsPure");