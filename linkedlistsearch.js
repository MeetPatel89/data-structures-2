const LinkedList = require('./linkedlist');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

console.log(myList);
myList.printList();
console.log(myList.findNodeRecursively('Node 7', myList))