// Calculate the values of counters after applying all alternating operations: 
//      increase counter by 1; 
//      set value of all counters to current maximum.

/* 
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
*/


let maxExecutionCount = 0; // A global counter for test purpose;
/* Faster O(N+M) */
const solution = (N, A=[]) => {
    let result = Array(N).fill(0);
    let maximum = 0;
    let resetLimit = 0;

    for (K = 0; K < A.length; K++)
    {
        if (A[K] < 1 || A[K] > N + 1) {
            console.log("Bad input"); return [];
        }
            
        if (A[K] >= 1 && A[K] <= N)
        {   
            let index = A[K] - 1;
            if (result[index] < resetLimit) {
                result[index] = resetLimit + 1;
            } else {
                result[index]++;
            }

            if (result[index] > maximum)
            {
                maximum = result[index];
            }
        }
        else
        {
            resetLimit = maximum;
        }
    }

    for (i = 0; i < result.length; i++)
        result[i] = Math.max(resetLimit, result[i]);

    return result;
}

/* Slower O(N*M) */
function solutionA(N, A=[]) {    
    console.time("solution");
    const counter = Array(N).fill(0); //A Mutable array of size N, filled with 0s, for loop is slightly faster than fill though
    let lastMaxInCounter = 0;
    function increase(index) {
        let val = counter[index-1];
        if(val !== undefined) counter[index-1] = val + 1;
        if(lastMaxInCounter < val+1) {
            lastMaxInCounter = val+1;
            maxExecutionCount++;
        }

    }

    for(K=0; K<A.length; K++) {
        const X = A[K]; 
        if(X>=1 && X<=N){
            increase(X);
        }
        if(X===N+1) {
            //counter.fill(lastMaxInCounter);
            //counter = Array.from(counter, x => lastMaxInCounter);
            let y=N;
            while(y--) counter[y]=lastMaxInCounter; //while is fastest
            //console.timeLog("setMax");
        }
    }
    
    console.timeEnd("solution");
    return counter;

}

/* Faster O(N+M) */
function solutionB(N, A) {
    console.time("solutionB");
    // initialize all counters to 0
    let counters = Array(N).fill(0)

    // The maximum value of the counter is 0
    let max = 0

    // This variable will determine if an increment all operation has been encountered
    // and its value determines the maximum increment all operation encountered so far
    // for start it is 0, and we will set it to the value of max when A[i] == N + 1
    let max_all = 0

    for(let i = 0; i < A.length; i++) {

        if(A[i] <= counters.length) {

            // if the value of A[i] is 1, we have to increment c[0]
            // and hence the following index
            const c_index = A[i] - 1

            // if max all operation was found previously,
            // we have to set it here, because we are not setting anything in the else section
            // we are just setting a flag in the else section
            // if its value however is greater than max_all, it probably was already maxed
            // and later incremented, therefore we will skip it
            if(counters[c_index] < max_all) counters[c_index] = max_all

            // do the increment here
            const v = ++counters[c_index]

            // update the max if the current value is max
            max = v > max ? v : max
        }

        // this is straight forward
        else max_all = max
    }

    // if there are remaining items that have not been set to max_all inside the loop
    // we will update them here.
    // and we are updating them here instead of inside the for loop in the else section
    // to make the running time better. If updated inside the loop, we will have a running time of M * N
    // however here it's something like (M + N) ~ O(N)
    if(max_all) counters = counters.map(v => v < max_all ? max_all : v)

    // return the counters
    console.timeEnd("solutionB");
    return counters
}

/* CORRECTNESS TESTS */
const A1 = [3,4,4,6,1,4,4], N1= 5;
console.log(solution(N1, A1)); // should return  [3, 2, 2, 4, 2]
//console.log(solutionB(N1, A1)); // should return  [3, 2, 2, 4, 2]

/* PERFORMANCE TESTS */
/* let B=[], Y=0;
const load = 10000000;
for(i=0; i<load; i++) {
    B.push(Math.round(Math.random()*(100-1)+1));
}
Y = Math.round(Math.random()*(load-1)+1);
 */
//console.log(Y, B);

const startTime = new Date();
//solution(Y, B);
//solutionB(Y, B);
//console.log(maxExecutionCount);
console.log(`Execution time: ${Date.now() - startTime}ms`); // Test with 1M random ints took <50ms

