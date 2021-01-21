package Leetcode.src;

public class RemoveDuplicatesFromSortedArray {
    // Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
    public int removeDuplicates(int[] nums) {
        int lastUniqueIndex = 0;
        for(int i=0; i<nums.length-1; i++) {
            if(nums[i] != nums[i+1]) {
                nums[++lastUniqueIndex] = nums[i+1];
            }
        }
        return ++lastUniqueIndex;
    }
}
