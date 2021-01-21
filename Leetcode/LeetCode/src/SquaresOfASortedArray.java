package Leetcode.LeetCode.src;

public class SquaresOfASortedArray {
    public int[] sortedSquares(int[] A) {
        int[] SQ = new int[A.length];
        int temp;
        for (int i = 0; i < A.length; i++){
            SQ[i] = A[i]*A[i];
        }
        for (int i = 0; i < SQ.length; i++) {
            for(int j = 0; j < SQ.length; j++){
                if(SQ[i] < SQ[j]) {
                    temp = SQ[i];
                    SQ[i] = SQ[j];
                    SQ[j] = temp;
                }
            }
        }
        return SQ;
    }
}
