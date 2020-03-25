import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
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

    return null;
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
