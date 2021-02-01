/* 


 */
function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS)
}

console.log(replaceString("World", "Japan", "Hello World"));