/* 
    Write a function that takes in an array of integers and return the product of all elements
*/

function productOfArray(A=[]) {
    if(A.length === 0) return;
    if(A.length === 1) return A[0];
    return A[0] * productOfArray(A.slice(1));
}


console.log(productOfArray([1,2,3,4,-1]));