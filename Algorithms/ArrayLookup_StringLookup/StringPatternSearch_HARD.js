/* 
    Given a string S1, return how many times the string S2 occur in S1. 

    f("oggomggomg", "omg") => 2
*/


/* Naive search O(N*M) NEVER USE */
function findStringOccurance(S1, S2) {
    if(S2.length > S1.length) return 0;
    let count=0, i=0, j=0;

    while(i<S1.length) {
        while(j<S2.length) {
            if(S1[i] === S2[j]) {
                i++; j++;
            } else {
                i++; j=0;
            }
        }
        if(j===S2.length) {count++; j=0;}
        i++;
    }

    return count;
}

/* Search using regex */

function findUsingRegex(S1, S2) {
    let regex = new RegExp(S2, 'g');
    let matches = S1.match(regex);

    return matches.length;
}

/* KMP (Knuth–Morris–Pratt) Algorithm O(N+M) but N>>M, so O(N) */
/* In this algorith instead of sliding the window by 1 we slide by an optimal number of index 
An lps[] array is maintained which tells for each index, 
what is the max length of the prefix that is also a suffix.

Then, during sliding, if the index of mismatch is j, we find the lps[j-1]. 
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


//console.log(findStringOccurance("oggomggomgg", "omg"));
//console.log(findStringOccurance("oggomggomgg", "gg"));

/* console.log(findUsingRegex("oggomggomgg", "omg"));
console.log(findUsingRegex("oggomggomgg", "gg")); */

console.log(findSubstringByKMP("onionionspl", "onion"));