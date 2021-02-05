import {getRandomArray} from "../lib/utils.js";
/* 
Radix sort is non-comparison sort. It only works for number arrays.

Fundamental principle: a number with N digits will always be greater than a number with M digits if N>M.

Strategy:
Have a bucket of size equal to radix (usually 10).
Loop through the array, and for each number check the last digit.
Put each number in the bucket corresponding to their last digit.
E.g. 1325 goes to bucket 5, 225 also goes to bucket 5. 17 goes to bucket 7. 
These bucket are like queue, so FIFO.
Once all numbers are put into either of the buckets, put them back into the array, but in order of bucket number.
i.e. elements from bucket 1 would be pushed first (in FIFO order), then from bucket 2 ... from bucket 10.

Repeat, the same process for 2nd last digit. Then 3rd last digit. Till nth last digit where n is the max number of digit any number has.
For A=[1,24,2345,245,99,13] the loop runs 4 times.


TC: Worst/Avg/Best - O(nk). n = number of elements, k = max number of digits in any number
* for all unique randomly distributed numbers, though, O(nlogn).

SC: O(n+k)
*/


/* 
Returns the k-th last digit of a number (k >= 0)
findNthLastDigit(1234, 2) => 2
*/
// O(k)
function findNthLastDigit(num, k) {
    /* for(let i=1; i<k; i++) {
        num = Math.floor(num/10); // throwing out the (k-1) digits from end
    }
    return num%10;
 */
    return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10;
}

/* Returns the max value of k where k is the number of digits in each  */
/* O(N) */
function findMaxDigit(A) {
    let maxValue = Math.max(...A);
    if(!maxValue) return 1;
    // all of the below formulas work
    //let numDigit = Math.max(Math.floor(Math.log10(Math.abs(maxValue))), 0) + 1;
    //let numDigit = (Math.log10((maxValue ^ (maxValue >> 31)) - (maxValue >> 31)) | 0) + 1;
    return Math.floor(Math.log10(Math.abs(maxValue))) + 1;
    //return maxValue.toString().length; //since, we are dealing with integer only, we can use this
}


/* Assumption: A is an array of positive integers */
// O(N*k) ideally k<<N
function radixSort(A=[], kthLastDigit = 0, maxDigit=findMaxDigit(A)) {
    // Create a bucket having size = radix, i.e. 10
    let bucket = Array.from({length: 10}, () => []);

    // O(N)
    // Check last digit of eatch integer and put them in corresponding buckets
    for (let i = 0; i < A.length; i++) {
        let index = findNthLastDigit(A[i], kthLastDigit);
        bucket[index].push(A[i]);
    }

    // Put the items back into the array
    A = [].concat(...bucket);

    if(kthLastDigit === maxDigit - 1) return A; //base case to stop recursion
    return radixSort(A, kthLastDigit+1, maxDigit); //recurse with next digit 
}

console.log(radixSort(getRandomArray(10, 999)));

//console.log(radixSort([0,10,500,100,800]));