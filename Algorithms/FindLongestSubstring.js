/* 
Write a function which accepts a string and returns the length of the 
longest substring with all distinct characters
*/

// thisisawesome
function findLongestDistinctSubstring(S) {
    if(!S) return 0;

    let l=0, r=1, max=0;
    let chars = {}
    chars[S[l]] = 1
    while(r < S.length) {
        if(!chars[S[r]]) {
            chars[S[r]] = 1;
            max=Math.max(max, r+1-l);
            r++;
        } else {
            l++;
        }
    }
    return max;
    
}

console.log(findLongestDistinctSubstring("thisisawesome"))