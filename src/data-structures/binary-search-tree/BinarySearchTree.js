import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null);
  }

  contains(value) {
    return this.root.contains(value);
  }

  delete(value) {
    this.root.delete(value);
  }

  insert(value) {
    this.root.insert(value);
  }

  inOrder() {
    let result = [];
    this.root.inOrder(result);
    return result;
  }
}