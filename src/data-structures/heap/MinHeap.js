import Heap from './Heap';

export default class MinHeap extends Heap {
  constructor() {
    super();
    this.compare = (a, b) => a < b;
  }
}