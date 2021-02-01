/* 
    Write a function that takes in an array of arrays, and returns a new array with all values flattened
    Don't use Array.flat() or Array.flatMap()
*/



function flatten(A=[], result=[]) {
    if(A.length === 0) return result;

    if(typeof A[0] === "number") {
        result.push(A[0]);
        return flatten(A.slice(1), result)
    } else {
        return flatten([...A[0]].concat(A.slice(1)), result)
    }
}


console.log(flatten([0, [1,2],3,4,[5,6,7]])); //[0,1,2,3,4,5,6,7]
console.log(flatten([1, [2, [3,4], [[5]]]])); //[1,2,3,4,5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); //[1,2,3]
