/* 
Write a function which accepts an object and 
returns an array of all the values in the object that have a typeof string.

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

f(obj) // ["foo", "bar", "baz"])
*/

function collectStrings(O={}, result=[]){
    let values = Object.values(O);
    if(values.length === 0) return result;

    if(typeof values[0] === "string") {
        result.push(values[0]);
        return collectStrings({...values.slice(1)}, result);
    } else if(values[0] instanceof Object) {
        return collectStrings({...Object.values(values[0]), ...values.slice(1)}, result);
    } else {
        return collectStrings({...values.slice(1)}, result);
    }
}

/* 
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])