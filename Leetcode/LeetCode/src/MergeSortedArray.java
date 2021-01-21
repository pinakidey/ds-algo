package Leetcode.LeetCode.src;

public class MergeSortedArray {
    /* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2. */

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Merge
        System.arraycopy(nums2, 0, nums1, m, n);
        // Sort
        int temp;
        for(int i=0; i < nums1.length; i++) {
            for(int j=0; j < nums1.length; j++) {
                if(nums1[i] < nums1[j]){
                    // Swap
                    temp = nums1[j];
                    nums1[j] = nums1[i];
                    nums1[i] = temp;
                }
            }
        }
    }
}
