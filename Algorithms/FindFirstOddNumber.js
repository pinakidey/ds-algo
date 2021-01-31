/* 
In an array cotaining positive numbers, find the first odd number.
If none found return -1;
*/

function findFirstOdd(A=[]) {
    if(A.length === 0) return -1;

    if(A[0]%2 === 1) {
        return A[0];
    } else {
        return findFirstOdd(A.slice(1))
    }
}


console.log(findFirstOdd([1234,5678,8946,0,7,4523]));
console.log(findFirstOdd([1234,5678,8946]));