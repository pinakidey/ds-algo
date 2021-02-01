/* 
    Given an array of string capitalize each word and return as array
*/


function capitalizeWords(A=[], result=[]) {
    if(A.length===0) return result;
    result.push(A[0].toUpperCase());
    return capitalizeWords(A.slice(1), result);
}


console.log(capitalizeWords(['car','taco','banana']));