//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fibonacci2RaisedN(num) { // DONT USE
    if (num === 0) return 0;
    if (num === 1) return 1;
  
    return fibonacci2RaisedN(num - 1) + fibonacci2RaisedN(num - 2);
}

function fibonacci2N(n, memo={}) { // Uses Memoization
        console.log(n, memo);
        if (memo[n]) return memo[n];
        
        if (n === 0) return 0;
        if (n === 1) return 1;

        return memo[n] = fibonacci2N(n - 1, memo) + fibonacci2N(n - 2, memo);
    }

function fibonacciN(num){ //Always Use this
    var a = 1, b = 0, temp;
    
    while (num > 0){
        temp = a;
        a = a + b;
        b = temp;
        console.log(a, b)
        num--;
    }
    
    return b;
    }

const index = 5;
//console.log(fibonacci2RaisedN(index));
//console.log(fibonacci2N(index));
console.log(fibonacciN(index));


/* 
Let’s use 50 as an input number and see how it looks like:
While loop
    Time complexity: O(N)
    Space complexity: Constant
    Function calls: 51
    Time needed: 0.000001ms
Recursion
    Time complexity: O(2^N)
    Space complexity: O(n)
    Function calls: 20.365.011.074
    Time needed: 176.742ms
Memoization
    Time complexity: O(2N)
    Space complexity: O(n)
    Function calls: 99
    Time needed: 0.000001ms
 */