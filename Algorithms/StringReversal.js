function reverseString(s) {
    return s.split('').reverse().join('');
}

/* O(n) */
function reverseStringManually(s) {
    for(i=s.length-1, o='';i>=0;o+=s[i--]) {};
    return o;
}



console.log(reverseString("PINAKI"));
console.log(reverseStringManually("PINAKI DEY"));