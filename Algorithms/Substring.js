let text = 'Mozilla'
// print last 4 chars
console.log(text.substring(text.length - 4 ))  // => "zilla"
// print from index 2 to index 5
console.log(text.substring(2,5))  // => "zil"
// print 3 chars starting from index 2
console.log(text.substr(2,3))     // => "zil"

console.log(text.substring(5, 2))  // => "zil" //swaps indices internally
console.log(text.slice(5, 2))      // => ""

console.log(text.substring(-5, 2))  // => "Mo" //-ve index & NaN is converted to 0
console.log(text.substring(-5, -2)) // => ""

console.log(text.slice(-5, 2))   // => ""       //-ve index sets the index at end, and counts backwards if second index too is -ve
console.log(text.slice(-5, -2))  // => "zil"


function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS)
}

console.log(replaceString("World", "Japan", "Hello World"));