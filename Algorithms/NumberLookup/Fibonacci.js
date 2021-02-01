//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


/* Using Recursion O(2N) => O(N) */
function fibonacci2N(n, memo={}) { // Must Use Memoization otherwise it becomes O(2^N)
        //console.log(n, memo);
        if (memo[n]) return memo[n];
        
        if (n === 0) return 0; //if series starts with 0, make this 0. Otherwise, 1
        if (n === 1) return 1;

        return memo[n] = fibonacci2N(n - 1, memo) + fibonacci2N(n - 2, memo);
    }

/* If asked to return n-th number (not the number at n-th index) */
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/* O(N) */
function fibonacciN(num){ //Always Use this, unless asked to use recursion
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

const index = 6;
//console.log(fibonacci2RaisedN(index));
//console.log(fibonacci2N(index));
console.log(fibonacci2N(index));


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