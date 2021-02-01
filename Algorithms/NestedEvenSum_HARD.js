/* DIFFICULT */
/* 
    Write a recursive which returns the sum of all even numbers in an object which may contain nested object

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj2); // 10

*/

function nestedEvenSum(O={}, sum=0) {
  if(Object.keys(O).length === 0) return sum;

  let V = Object.values(O);
  if(typeof V[0] === "number") {
    if(V[0]%2 === 0) sum+=V[0];
    return nestedEvenSum({...V.slice(1)}, sum);
  } else if (typeof V[0] === "object") {
      const newPayload = []; 
      newPayload.push(...Object.values(V[0]));
      newPayload.push(...V.slice(1));
      return nestedEvenSum({...newPayload}, sum);
  } else {
    return nestedEvenSum({...V.slice(1)}, sum);
  }
}

/* Concise solution */
/* 
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
*/



var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10