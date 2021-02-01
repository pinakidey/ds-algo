/* 
Check if two string are anagram of each other

Each character must occur same number of times, in any order
Both strings are non-empty and are of same length
Characters are case insensitive
*/

/* O(N) */
function isAnagram (A, B) {
    if(A.length !== B.length) return false
    // create two freq counters
    let counterA = {};
    let counterB = {};

    for(let val of A) {val = val.toLowerCase(); counterA[val] = ++counterA[val] || 1}
    for(let val of B) {val = val.toLowerCase(); counterB[val] = ++counterB[val] || 1}

    // Loop through to check occurance count
    for(let key in counterA) {
        if(counterA[key] !== counterB[key]) return false
    }
    return true;
}

// Can be done using 2 loops only 
/* O(N) */
function isAnagramOptimal (A, B) {
    if(A.length !== B.length) return false;
    let counterA = {};

    for(let val of A) {val = val.toLowerCase(); counterA[val] = ++counterA[val] || 1}

    // Loop through to check occurance count
    for(let key of B) {
        key = key.toLowerCase()
        if(!counterA[key]) return false // if doesn't exist, exit
        counterA[key] = --counterA[key] // if exists, reduce counter
    }
    return true;
}


console.log(isAnagramOptimal("Monalisa", "lisamona"))