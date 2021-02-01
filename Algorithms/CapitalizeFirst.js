/* 
    Given an array of string capitalize the first letter of each string
*/


function capitalizeFirst(A=[], result=[]) {
    if(A.length===0) return result;
    result.push(capFirst(A[0]));
    return capitalizeFirst(A.slice(1), result);
    
    
    function capFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}


console.log(capitalizeFirst(['car','taco','banana']));