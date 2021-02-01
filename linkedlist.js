const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.nextNode = currentHead;
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      console.log('Empty linked list');
      this.head = new Node(data);
    } else {
      while (tail.nextNode) {
        tail = tail.nextNode;
      }
      tail.nextNode = new Node(data);
    }
  }

  removeHead() {
    if (this.head) {
      let currentHead = this.head;
      this.head = currentHead.nextNode;
      return currentHead;
    } else {
      return 'The linkedlist is empty/has no head';
    }
  }

  print() {
    let currentNode = this.head;
    let printedLinkedList = '';
    if (!currentNode) {
      console.log('The linked list is empty!');
    }
    while (currentNode) {
      if (currentNode.nextNode) {
        printedLinkedList += `${currentNode.data} -> `;
      } else {
        printedLinkedList += currentNode.data;
      }
      currentNode = currentNode.nextNode;
    }
    console.log(printedLinkedList);
  }
}

const linkedList = new LinkedList();
linkedList.addToHead('Node One');
linkedList.addToHead('Node Two');
console.log(linkedList);
linkedList.addToTail('Node Three');
linkedList.print();
console.log(linkedList);
linkedList.removeHead();
console.log(linkedList);
linkedList.print();
