/* 
Write a function that takes variable number of arguments (int or char) and checks if there is any duplicates. 
Returns bool
*/


function areThereDuplicates(...args) {
    let set = new Set(args);
    return !(set.size === args.length)
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates("a", "b", "c", "a"))
