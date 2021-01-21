

function solution(n) {
    //const binary = (n >>> 0).toString(2); // n.toString(2) should suffice, if n is always +ve. JS implements -ve int's binary in 2's complement though
    if (n == 0) return "0"; 
    var bin = "";  
  
    while (n > 0)  
    { 
        // to get the last binary digit of the number 'n' and accumulate it at the beginning of 'bin' 
        bin = ((n & 1) == 0 ? '0' : '1') + bin; 
        
        // right shift 'n' by 1 
        n >>= 1; 
    } 
    
    // required binary number 
    return bin; 
}

console.log(solution(5));