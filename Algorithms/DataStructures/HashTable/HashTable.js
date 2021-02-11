
/* 
Algorithm		Average	    Worst case
Space		    O(n)	    O(n)
Search/Access   O(1)	    O(n)
Insert		    O(1)	    O(n)
Delete		    O(1)	    O(n)
*/


/**
 * A HashTable Implementation backed by Arrays 
 */
class HashTable {
    constructor(size=17){ // Default: 17, prime number
        this.storage = Array.from({length: size}, () => []); //In JS an empty array takes 32 bytes, depends on engine. If `size` is not large we can initialize seperate chaining by default 
        this.size = size;
    }

    /**
     * A simple hash function. Works only for String input.
     * @description Use well researched hash functions algorithms like FNV Hash, MurmurHash, SDBM or create your own if you need to handle billions of keys.
     * 
     * @param {String} str - key for which a hash is to be calculated
     */
    hash(str) {
        let finalHash = 0;
        for (let i = 0; i < Math.min(str && str.length || 0, this.size); i++) { //O(K)
          const charCode = str.charCodeAt(i) - 96;
          finalHash = 31*finalHash + charCode;
        }
        return finalHash;
    }

    /**
     * Adds a Key-Value pair into the HashTable
     * @description 
     * - Uses Seperate Chaining to handle Collision. 
     * - In case of duplicate key, corressponding value gets updated
     * @param {String} key - Key
     * @param {any} val - Value
     */
    put(key, val) {
        let hash = this.hash(key);
        let index = hash & (this.size-1);
        //if(!this.storage[index]) this.storage[index] = [];
        /* Takes, O(k), where k=number of entries in a bucket. Chain should not be too long if hash() distribution works fine. 
        But for keys, like "A", "B",.. they might get clustered and chain can be long */
        for(let entry of this.storage[index]) { 
            if(entry[0] === key) {entry[1] = val; return;} 
        }
        this.storage[index].push([key, val]);
    }


    /**
     * Returns the value stored against the provided key `key`, in the HashTable
     * 
     * @param {String} key - a key to get its corresponding value from the hashtable
     * @returns {any} value stored against the provided key `key`
     */
    get(key) {
        let hash = this.hash(key);
        let index = hash & (this.size-1);
        let bucket = this.storage[index];
        if(!bucket || bucket.length === 0) return undefined;
        for(let entry of bucket) { 
            if(entry[0] === key) return entry[1];
        }
        return undefined;
    }

    /**
     * Returns an array of keys in the HashTable. Keys are unique by design.
     * 
     * @returns {Array} array of keys
     */
    keys() {
        let keys = [];
        for(let bucket of this.storage) { 
            if(bucket && bucket.length > 0) {
                for(let entry of bucket) {
                    keys.push(entry[0]);
                }
            }
        }
        return keys;
    }


    /**
     * Returns an array of values present in the HashTable.
     * 
     * @returns {Array} array of values
     */
    values() {
        let values = [];
        for(let bucket of this.storage) {
            if(bucket && bucket.length > 0) {
                for(let entry of bucket) {
                    values.push(entry[1]);
                }
            }
        }
        return values;
    }
}

let hashTable = new HashTable();
hashTable.put(null , 0);
hashTable.put("Apple" , 1);
hashTable.put("Banana" , 3);
hashTable.put("Carrot" , 3);
hashTable.put("Apple" , null);
hashTable.put("Date" , 5);
console.log(hashTable);
console.log(hashTable.get("Carrot"));
console.log(hashTable.keys());
console.log(hashTable.values());