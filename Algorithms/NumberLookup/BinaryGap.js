// Find longest sequence of zeros in binary representation of an integer.

/* A binary gap within a positive integer N is any maximal sequence of 
consecutive zeros that is surrounded by ones at both ends 
in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647]. */

function solution(N) {
    const binary = (N >>> 0).toString(2); // N.toString(2) should suffice, if N is always +ve. JS implements -ve int's binary in 2's complement though
    console.log(binary);
    //console.log(parseInt(binary, 2));
    const regex = /(?!1)(0)*(?=1)/g;
    const found = binary.match(regex);
    if(!found) return 0;
    const result = found.sort((a, b) => a.length - b.length).pop();
    return (result || []).length;
}

console.log(solution(5));
/* console.log(solution(529));
console.log(solution(32));
console.log(solution(1041));
console.log(solution(null));
console.log(solution(-1041)); */