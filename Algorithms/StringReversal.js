function reverseString(s) {
    return s.split('').reverse().join('');
}

/* O(n) */
function reverseStringManually(s) {
    for(i=s.length-1, o='';i>=0;o+=s[i--]) {};
    return o;
}

/* Using recursion */
function reverse(S) {
    if(!S) return "";
    if(S.length <= 0) return "";
    return (S[S.length-1]).concat(reverse(S.substring(0, S.length-1))); //substring converts -ve index to 0
}
function reverse2(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}



console.log(reverseString("PINAKI"));
console.log(reverseStringManually("PINAKI DEY"));
console.log(reverse("PINAKI DEY"));