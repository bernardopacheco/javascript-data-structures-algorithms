import Heap from './Heap';

export default class MaxHeap extends Heap {
  constructor() {
    super();
    this.compare = (a, b) => a > b;
  }
}