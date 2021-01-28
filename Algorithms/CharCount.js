// Count the occurance of each alphanumeric characters in a string

/* O(n) */
function charCount(S) {
    if(!S) return 0;
    let counter = {}; // S(n)
    const regex = /[A-Z0-9]/i;

    for(var char of S) { // loop through the values
        if(regex.test(char)) {
            // using c.charCodeAt() would be faster, but you need to remember the range   
            let c = char.toLowerCase();
            counter[c] = ++counter[c] || 1;
        } 
            
    }
    return counter;
}

console.log(charCount("Hello hi!"));
console.log(charCount(""));
console.log(charCount(null));
console.log(charCount("My PIN is 1340091"));

