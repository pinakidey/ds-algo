/* 
    Check if a given string is palindrome or not. Returns boolean.
*/

function isPalindrome(S) {
    if(S.length === 1) return true;
    if(S.length === 2) return S[0] === S[1];
    if(S[0] !== S[S.length-1]) return false;
    return isPalindrome(S.slice(1, S.length-1));  
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("bb"));