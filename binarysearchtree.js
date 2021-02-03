class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value) {
    if (value === this.value) {
      return this;
    } else {
      if (value < this.value) {
        if (this.left) {
          return this.left.getNodeByValue(value);
        } else {
          return null;
        }
      } else {
        if (this.right) {
          return this.right.getNodeByValue(value);
        } else {
          return null;
        }
      }
    }
  }
}

const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

console.log(bt.getNodeByValue(55))