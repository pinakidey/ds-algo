package Leetcode.LeetCode.src;

public class App {
    public static void main(String[] args) throws Exception {
       // Firstly, we need to actually create a DVD object for The Avengers.
        DVD avengersDVD = new DVD("The Avengers", 2012, "Joss Whedon");
        DVD incrediblesDVD = new DVD("The Incredibles", 2004, "Brad Bird");
        DVD findingDoryDVD = new DVD("Finding Dory", 2016, "Andrew Stanton");
        DVD lionKingDVD = new DVD("The Lion King", 2019, "Jon Favreau");
        
        // The actual code for creating an Array to hold DVD's.
        DVD[] dvdCollection = new DVD[15];

        // Put "The Incredibles" into the 4th place: index 3.
        dvdCollection[3] = incrediblesDVD;
        
        // Put "Finding Dory" into the 10th place: index 9.
        dvdCollection[9] = findingDoryDVD;
        
        // Put "The Lion King" into the 3rd place: index 2.
        dvdCollection[2] = lionKingDVD;
        
        // Next, we'll put it into the 8th place of the Array. Remember, because we started numbering from 0, the index we want is 7.
        dvdCollection[7] = avengersDVD;

        int capacity = dvdCollection.length;
        System.out.println("The Array has a capacity of " + capacity);
        for (DVD dvd : dvdCollection) {
            // Print the current value of square.
            System.out.println(dvd);
        }
    }
}
