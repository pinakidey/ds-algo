package Leetcode.LeetCode.src;
import java.lang.Math;
public class MaxConsecutiveOnes {
    public static int findMaxConsecutiveOnes(int[] nums) {
        int count = 0, max = 0;
        for(int num :nums){
            if(num==1){
                count++;
            }else
                count=0;
            max=Math.max(count,max);
        }
        return max;
    }
}