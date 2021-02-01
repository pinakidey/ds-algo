// Find the sum upto n of a sequence 1,2,...n


/*
Sum of the Arithmatic sequence formula:

S(n) = n/2 * [2a(1) + (n-1)d]

If the a(n) is known, then
S(n) = n/2 * [a(1) + a(n)]

*/

// 0(1)
function sum(n) {
    return (n/2)*(n+1);
}

/* Sum using recursion (takes much less time) */
function sumR(n) {
    if (n===1) return 1;
    return n + sumR(n-1);
}

console.time("sum");
console.log(sum(100000));
console.timeEnd("sum");

console.time("sumR");
console.log(sumR(5));
console.timeEnd("sumR");