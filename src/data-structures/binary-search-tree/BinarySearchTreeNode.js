export default class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  contains(value) {
    return !!this.find(value);
  }

  delete(value) {
    if (value < this.value) {
      this.left = this.left.delete(value)
    } else if (value > this.value) {
      this.right = this.right.delete(value)
    } else {
      // case 1: no child
      if (!this.left && !this.right) {
        return null;
      }
      // case 2: one child
      else if (!this.left) {
        return this.right;
      } else if (!this.right) {
        return this.left;
      }
      // case 3: two children
      else {
        // find min in right
        let minNode = this.right.findMin();
        
        // copy the value in targetted node
        this.value = minNode.value;

        // delete duplicate from right-subtree
        this.right = this.right.delete(this.value);
      }
    }

    return this;
  }

  find(value) {
    if (this.value === value) {
      return this;
    } else if (value < this.value) {
      if (this.left) {
        return this.left.find(value);
      } 
    } else {
      if (this.right) {
        return this.right.find(value);
      }
    }

    return null;
  }

  findMin() {
    if (this.left) {
      return this.left.findMin();
    } else {
      return this;
    }
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
    } else if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTreeNode(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTreeNode(value);
      }
    }
  }

  inOrder(result) {
    if (this.left) {
      this.left.inOrder(result);
    }

    result.push(this.value);

    if (this.right) {
      this.right.inOrder(result);
    }
  }
}