/* 
    Write a function called which takes in an object and 
    finds all of the values which are numbers, converts them to strings, 
    and returns the processed object.
    The object can have many layers of nested objects inside. 
    Recursion would be a great way to solve this!

    obj o = {
        a: 2,
        b: {x:3},
        c: ["hi"]
    }
    =>
    {
        a: "2",
        b: {x:"3"},
        c: ["hi"]
    }

*/

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }


let obj = {
    num: 1,
    data: {
        val: 4,
        info: {
            random: 66
        }
    },
    test: []
}
console.log(stringifyNumbers(obj));