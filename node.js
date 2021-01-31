class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    set nextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node
        } else {
            throw new Error('Next node should be an instance of Node class')
        }
    }

    get nextNode() {
        return this.next;
    }
}

const nodeOne = new Node('This is node One');
const nodeTwo = new Node('This is node Two')
nodeOne.nextNode = nodeTwo
console.log(nodeOne);
console.log(nodeOne.nextNode)
const nodeThree = new Node('This is node Three')
nodeTwo.nextNode = nodeThree
console.log(nodeOne);