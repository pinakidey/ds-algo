
function count(str, word) {
    return str.match(new RegExp(word, 'g')).length;
}

console.log(count("Good Afternoon", "oo"));