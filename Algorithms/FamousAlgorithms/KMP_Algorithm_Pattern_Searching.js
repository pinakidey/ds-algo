/* KMP (Knuth–Morris–Pratt) Algorithm.
Searches the indexes of a pattern present in a text.
Time Complexity : O(N+M) but N>>M, so O(N) 
Space Complexity: O(M) where M is the length of the pattern
*/

/* 
In this algorith instead of sliding the window by 1,
we slide by an optimal number of index.
An lps[] array is maintained which tells, for each index, 
what is the max length of the prefix that is also a suffix.

Then, during sliding, if the index of mismatch is j, we find lps[j-1]. 
And reset the start of the sliding window to lps[j-1].

See: https://www.youtube.com/watch?v=4jY57Ehc14Y
*/

function findSubstringByKMP(text, pat) {
    let N = text.length;
    let M = pat.length;
    let lps = [];
    computeLPSArray(pat, M, lps);
    let i=0, j=0;

    while(i<N){
        if(text[i]===pat[j]) {
            i++; j++;
        } else {
            if(j!=0) {
                j=lps[j-1];
            } else {
                i++;
            }
        }
        if(j==M) {
            console.log("Match found at: " + (i-j));
            j=lps[j-1]; // Continue searching
        }
    }
}

function computeLPSArray(pat, M, lps){
    let len=0, i=1;
    lps[0]=0;
    while(i<M) {
        if(pat[i] == pat[len]) {
            lps[i] = len+1;
            len++;
            i++;
        } else {
            if(len!=0) {
                len = lps[len-1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

console.log(findSubstringByKMP("onionionspl", "onion"));