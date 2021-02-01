// Find value that occurs in odd number of elements.

/* 
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

// Doesn't work for long array (Use Java)
function solution(A=[]) {
    let xor = 0;
    for (i in A) {
        xor = xor ^ i;
    }
    return xor;
}
//console.log(solution([10,3,10,3,9,7,9,7,1]));
console.log(solution([10,3,10,3,9,7,9,4,10,3,10,3,9,7,9]));

/* USE THIS */
// O(N) or O(N*log(N))
/* class Main
{
	// Function to find odd occurring element in a given array
	public static int findOddOccuring(int[] arr)
	{
		int xor = 0;
		for (int i: A) {
			xor = xor ^ i;
		}

		return xor;
	}

	public static void main(String[] args)
	{
		int[] A = { 10,3,10,3,9,7,9,4,10,3,10,3,9,7,9 };

		System.out.println("Odd occurring element is " + findOddOccuring(arr));
	}
} */

/* O(N**2) */
/* function solution(A=[]) {
    if(A.length === 0) return 0;
    let i=0;
    while(i < A.length) {
        if(A.filter(item => item === A[i]).length === 1) return A[i];
        i++;
    }
} */

// Returns all distinct items
/* function solution(A=[]) {
    if(A.length === 0) return 0;
    const distinctItems = A.filter((v, i, s) => s.indexOf(v) === i);
    return distinctItems;
} */

