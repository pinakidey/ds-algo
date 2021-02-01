/* 
    Find factorial of an integer
*/

function factorial(N) {
    if(N<0) return 0;
    if(N<=1) return 1;
    return N * factorial(N-1);
}

console.time("factorial");
console.log(factorial(10));
console.log(factorial(0));
console.log(factorial(-1));
console.timeEnd("factorial");
