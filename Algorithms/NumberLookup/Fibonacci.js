//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


/* Using Recursion with Memoization O(N) */
function fibonacciMemo(n, memo={}) { // Using Memoization
        //console.log(n, memo);
        if (memo[n]) return memo[n];
        
        if (n === 0) return 0; //if series starts with 0, make this 0. Otherwise, 1
        if (n <= 2) return 1;
        // we can initialize memo=[0,1,1]. Then we can get rid of above 2 ifs, first if would need to compare with undefined

        return memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    }

/* Using Iteration with Tabulation O(N) */
// Better Space Complexity
function fibonacciTabulation(n) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
        
    }
    return fibNums[n];
}    
/* Worst solutions */
// O(2^N), actually O(1.6^N)
function fib(n) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/* O(N) */
function fibonacciN(num){
    var a = 1, b = 0, temp;
    
    while (num > 0){
        temp = a;
        a = a + b;
        b = temp;
        //console.log(a, b);
        num--;
    }
    
    return b;
    }

const index = 10000;

console.log(fibonacciMemo(index)); // StackOverflow @ 10000
console.log(fibonacciTabulation(index)); // No StackOverflow, better space complexity
console.log(fibonacciN(index));


/* 
Let’s use 50 as an input number and see how it looks like:
While loop
    Time complexity: O(N)
    Space complexity: Constant
    Function calls: 51
    Time needed: 0.000001ms

Recursion with Memoization
    Time complexity: O(2N)
    Space complexity: O(n)
    Function calls: 99
    Time needed: 0.000001ms
 */