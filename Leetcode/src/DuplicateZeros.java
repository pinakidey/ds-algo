package Leetcode.src;

public class DuplicateZeros {
    public void duplicateZeros(int[] arr) {
        for(int i=0; i<arr.length; i++){
            if(arr[i] == 0) {
                // Slide and insert
                for(int j=arr.length-1; j > i; j--) {
                    arr[j] = arr[j-1];
                }
                i++; //Skip over the newly added zero
            }
        }        
    }
}
