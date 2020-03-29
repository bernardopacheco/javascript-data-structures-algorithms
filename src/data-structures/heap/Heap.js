export default class Heap {
  constructor() {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }
    
    this.capacity = 10;
    this.size = 0;
    this.items = new Array(this.capacity);
    this.compare = null; // min and max heaps will provide comparator function
  }

  // start helper methods

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.items[this.getParentIndex(index)];
  }

  // end helper methods

  swap(indexOne, indexTwo) {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  checkCapacity() {
    if (this.size === this.capacity) {
      let temp = this.items;

      this.capacity *= 2;
      this.items = new Array(this.capacity);

      for (let i = 0; i < this.size; i++) {
        this.items[i] = temp[i];
      }
    }
  }

  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.items[0];
  }

  poll() {
    if (this.size === 0) {
      return null;
    }

    let item = this.items[0];

    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();

    return item;
  }

  add(value) {
    this.checkCapacity();
    this.items[this.size] = value;
    this.size++;
    this.heapifyUp();
  }

  isEmpty() {
    return !this.size;
  }

  heapifyUp() {
    let index = this.size - 1;
    
    while (this.hasParent(index) && this.compare(this.items[index], this.parent(index))) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let candidateIndex = this.getLeftChildIndex(index);

      if (this.hasRightChild(index) && this.compare(this.rightChild(index), this.leftChild(index))) {
        candidateIndex = this.getRightChildIndex(index);
      }

      if (this.compare(this.items[index], this.items[candidateIndex])) {
        break;
      } else {
        this.swap(index, candidateIndex);
      }
      
      index = candidateIndex;
    }
  }
}