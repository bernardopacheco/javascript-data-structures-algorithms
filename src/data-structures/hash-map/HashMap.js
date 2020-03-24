import LinkedList from '../linked-list/LinkedList';

const HASH_MAP_SIZE = 16;

export default class HashMap {
  constructor(size = HASH_MAP_SIZE) {
    this.buckets = Array(size).fill(null).map(() => new LinkedList());
    this.keys = {}; //  for key caching
    this.size = size;
  }

  delete(key) {
    const hash = this.hash(key);
    this.buckets[hash].delete((node) => node.key === key);
    delete this.keys[key];
  }

  get(key) {
    const hash = this.hash(key);
    const node = this.buckets[hash].find((node) => node.key === key);
    return node ? node.value : null;
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
    return !!this.keys[key];
  }

  set(key, value) {
    let hash = this.hash(key);
    this.buckets[hash].append({ 'key': key, 'value': value });
    this.keys[key] = hash;
  }
}