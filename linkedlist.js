const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
  }

  addToHead(data) {
    const newHead = new Node(data)
    const currentHead = this.head
    this.head = newHead
    newHead.nextNode = currentHead
  }

  addToTail(data) {
    const tailToAdd = new Node(data)
    let currentNode = this.head
    if (!currentNode) {
      this.head = tailToAdd
    } else {
        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = tailToAdd;
    }
    
  }

  removeHead() {
    const currentHead = this.head
    if (currentHead) {
      this.head = currentHead.nextNode
    } else {
      return 'linked list is empty'
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList)
linkedList.addToTail('Node One')
console.log(linkedList)
linkedList.addToTail('Node Two')
console.log(linkedList)
linkedList.addToTail('Node Three')
console.log(linkedList)
linkedList.removeHead()
console.log(linkedList)
linkedList.removeHead();
console.log(linkedList);
linkedList.removeHead();
console.log(linkedList);
console.log(linkedList.removeHead());
console.log(linkedList);