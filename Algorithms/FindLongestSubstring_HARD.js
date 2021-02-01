/* 
Write a function which accepts a string and returns the length of the 
longest substring with all distinct characters
*/

// thisisawesome
function findLongestDistinctSubstring(S) {
    if(!S) return 0;

    let l=0, r=0, max=0, maxL=0;
    let chars = {}
    while(r < S.length) {
        if(chars[S[r]] === undefined) {
            chars[S[r]] = r;
            if(r+1-l > max) {
                max = r+1-l;
                maxL=l;
            }
            r++;
        } else {
            let index = chars[S[r]];
            l=index+1;
            r=l;
            chars = {};
        }
    }
    console.log(S, max, S.substr(maxL, max));
    return max;
}

/* Concise solution */
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(findLongestDistinctSubstring("thisisawesome"));
console.log(findLongestDistinctSubstring("rithmschool"));
console.log(findLongestDistinctSubstring("bbbbbbb"));
console.log(findLongestDistinctSubstring("thisishowwedoit"))
