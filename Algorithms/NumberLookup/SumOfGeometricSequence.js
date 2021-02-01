// Find the sum of a geometric suquence upto nth number
// first element: a
// ratio: r

/*
Formula:
    S = a(r^n - 1)/(r-1)
*/

function sum(n, a, r) {
    return (Math.pow(r, n) -1)/(r-1)
}

console.log(sum(4,1,2));