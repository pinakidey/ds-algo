/* 
    Write a function that takes an array of integers and a callback.
    Returns true if any of the elements in the array passes the test implemented by the provided callback function.
    Don't use Array.some()
*/

function someRecursive(A=[], func) {
    if(A.length===0 || typeof func !== "function") return false;

    //return A.some(func);
    return func(A[0]) || someRecursive(A.slice(1), func);  
}

const isOdd = val => val%2 !== 0;
console.log(someRecursive([1,4,4], isOdd));
