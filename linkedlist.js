const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const headToAdd = new Node(data);
    let currentHead = this.head;
    if (!currentHead) {
      this.head = headToAdd;
    }
    this.head = headToAdd;
    this.head.nextNode = currentHead;
  }

  addToTail(data) {
    const tailToAdd = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = tailToAdd;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = tailToAdd;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    output = output.concat('<tail>');
    console.log(output);
  }
}

module.exports = LinkedList
