/* 
Given two positive integers, find out if twi numbers have same frequency of digits
f(182, 281) => true
*/



function sameFrequency(A, B) {
    // Frequency counter patter

    let counterA = {};
    let counterB = {};

    for(let char of A.toString()) counterA[char] = ++counterA[char] || 1
    for(let char of B.toString()) counterB[char] = ++counterB[char] || 1


    for(let key in counterA) {
        if(counterA[key] !== counterB[key]) return false
    }
    return true
}



console.log(sameFrequency(22, 222))