/* 
    Selection Sort: Compares two adjacent elements and Swaps, moving the smaller value towards the start of the array. 
    Logic: Iterate the full array, find the minimum value 
        and put that in the front of the unsorted part of the arrray. 
        Repeat.
    TC: Worst/Abg/Best - O(N^2) 
    SC: O(1)
    Usage: Only useful if for some reason you want to minimize the number of swaps
*/

function sort(A=[]) {
    console.log(A);
    if (A.length===0) return A;

    for(let i=0; i<A.length; i++) { //left pointer
        let minIndex = i;
        for (let j=i+1; j<A.length; j++) { //right pointer
            if(A[j] < A[minIndex]) minIndex=j;
        }
        if(i!==minIndex){
            let temp=A[i];
            A[i]=A[minIndex];
            A[minIndex]=temp;
            console.log("Swapped", i, minIndex);
        }
    }
    return A;
}


console.log(sort([7,1,2,3,4,5,6]));