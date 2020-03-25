import LinkedList from '../linked-list/LinkedList';

const HASH_MAP_SIZE = 16;

export default class HashMap {
  constructor(size = HASH_MAP_SIZE) {
    this.size = size;
    this.buckets = new Array(size);
    this.keys = {};

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  delete(key) {
    const hash = this.hash(key);
    this.buckets[hash].delete((node) => node.key === key);
    delete this.keys[key];
  }

  get(key) {
    const node = this.getNode(key);
    return node ? node.value : null;
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  getNode(key) {
    const hash = this.hash(key);
    return this.buckets[hash].find((node) => node.key === key);
  }

  hash(key) {
    let hash;

    if (typeof key === 'string') {
      const getUnicodeSumFromString = (key) => {
        return key.split('').reduce(
            (sum, character) => sum + character.charCodeAt(0), 
            0
          );
      };

      hash = getUnicodeSumFromString(key);
    } else if (typeof key === 'number') {
      hash = key;
    } else {
      throw 'Key is neither a string nor a number.'
    }

    return hash % this.buckets.length;
  }

  has(key) {
    return !!this.getNode(key);
  }

  set(key, value) {
    let node = this.getNode(key);

    if (node) {
      node.value = value;
    } else {
      const hash = this.hash(key);
      this.buckets[hash].append({ 'key': key, 'value': value });    
      this.keys[key] = hash;
    }
  }
}