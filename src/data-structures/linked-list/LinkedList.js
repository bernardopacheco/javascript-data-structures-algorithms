import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(value) {
    let newNode = new LinkedListNode(value);
    let temp = this.head;

    this.head = newNode;
    newNode.next = temp;
  }

  find(comparator) {
    let current = this.head;

    while (current !== null) {
      if (comparator(current.value)) {
        return current.value;
      }

      current = current.next;
    }
  }

  delete(comparator) {
    if (comparator(this.head.value)) {
      this.head = this.head.next;
      return;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current !== null) {
      if (comparator(current.value)) {
        previous.next = current.next;
        return;
      } else {
        previous = current;
        current = current.next;
      }
    }
  }

  toString() {
    let nodes = [];
    let current = this.head;

    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }

    return nodes.map(node => node.toString()).toString();
  }
}
