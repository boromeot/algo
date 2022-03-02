const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = Array(numBuckets).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).substring(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const kv = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    console.log(index, key)
    if (this.data[index]) {
      const oldHead = this.data[index];
      kv.next = oldHead;
      this.data[index] = kv;
      this.count++;
      return kv;
    }
    this.data[index] = kv;
    this.count++;
    return kv;
  }
}


module.exports = HashTable;