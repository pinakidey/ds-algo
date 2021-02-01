/* 
Write a function which takes two strings S1, S2 as arguments
and checks if any substring of S1 forms a substring of S2 without changing the order 

f("sing", "sting") => true
f("abc", "acb") => false
*/


/* Multiple pointer method */
// O(M) S(1)
function isSubsequence(S1,S2) {
    if(!S1.trim() || !S2.trim()) return false;
    let P1 = S1.length - 1;
    for (let P2 = S2.length - 1; P2 >= 0; P2--) {
        if (S1[P1] == S2[P2]) {
            S1 = S1.substr(0, S1.length - 1);
            P1--;
        }
        S2 = S2.substr(0, S2.length - 1);
    }
    if (!S1) {
        return true;
    } else {
        return false;
    }
}

/* NEED Improvement to S(1) */

/* O(N+M), S(M) */
/* function isSubsequence(S1, S2) {
    if(!S1.trim() || !S2.trim()) return false;
    // List all possible 2-char substrings of S2, count doesn't matter
    let subs={};
    let i=0;
    //O(N)
    while(i < S2.length -1) {
        subs[S2.substr(i++, 2)] = 1;
    }
    //O(M)
    for(i = 0; i<S1.length; i++) {
        let key = S1.substr(i, 2);
        if(subs[key]) return true;
    }
    return false;
} */


console.log(isSubsequence("abcd", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("adc", "bcracabdara"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("  ", "  "));