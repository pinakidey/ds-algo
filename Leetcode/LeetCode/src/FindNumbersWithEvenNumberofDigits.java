package Leetcode.LeetCode.src;

public class FindNumbersWithEvenNumberofDigits {
    public int findNumbers(int[] nums) {
        int count = 0;
        for(int num :nums){
            
            if (getDigitsCount(num) % 2 == 0) {
               count++;
            }
        }
        return count;
    }
    private int getDigitsCount(int num) {
        int count = 0;
        while (num > 0) {
            count += 1;
            num /= 10;
        }
        return count;
        //String number = String.valueOf(num);
        //char[] digits = number.toCharArray();
    }
}
