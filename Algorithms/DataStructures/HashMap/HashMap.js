class HashMap {
    constructor() {
      this.storage = [];
    }
  
    hashStr(str) { // only hashes string, not distributed uniformly, not constant-time
      let finalHash = 0;
      for (let i = 0; i < str.length; i++) { //O(K)
        const charCode = str.charCodeAt(i) - 96;
        finalHash += charCode;
      }
      return finalHash;
    }
  
    set(key, val) {
      let idx = this.hashStr(key);
  
      if (!this.storage[idx]) {
        this.storage[idx] = [];
      }
  
      // Allows duplicate - Fix this
      this.storage[idx].push([key, val]);
    }
  
    get(key) {
      let idx = this.hashStr(key);
  
      if (!this.storage[idx]) {
        return undefined;
      }
  
      for (let keyVal of this.storage[idx]) {
        if (keyVal[0] === key) {
          return keyVal[1];
        }
      }
    }
  }