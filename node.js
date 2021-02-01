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

module.exports = Node;
