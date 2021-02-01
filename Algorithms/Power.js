/* 
    Write a function that mimics Math.pow(base, exponent)
*/

function power(base, exponent) {
    if(base === 0) return 0;
    if(exponent < 0) return NaN;
    if(exponent === 0) return 1;
    if(exponent === 1) return base;

    return base * power(base, exponent-1);
}


console.log(power(2,4));
console.log(power(2,0));
console.log(power(2,1));
console.log(power(1,4));
console.log(power(0,4));
console.log(power(-2,-3));