import Heap from '../heap/Heap';

export default class PriorityQueue extends Heap {
  constructor() {
    super();
    this.compare = this.comparePriority;
    this.priorities = new Map();
  }

  add(item, priority) {
    this.priorities.set(item, priority);
    super.add(item);
  }

  poll() {
    let item = super.poll();
    
    this.priorities.delete(item);
    return item;
  }

  comparePriority(a, b) {
    return this.priorities.get(a) <= this.priorities.get(b);
  }
}