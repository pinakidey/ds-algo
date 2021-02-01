/* 
Given a sorted array of Integers (A) and a target average (N), 
determine if there is a pair [x, y] of values in A where the average of the pair euqals the target average (N)
There may be more than one pair. Elements can be -ve.
*/
/* O(N) */
function averagePair(A=[], N) {

    // Use Multiple Pointer pattern

    let l=0, r=A.length-1;

    while(l <= r) {
        if(0.5*(A[l]+A[r]) === N) return true;
        if(0.5*(A[l]+A[r]) > N) r--;
        if(0.5*(A[l]+A[r]) < N) l++;
    }
    return false;
}


console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));