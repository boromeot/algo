class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

const LL = new LinkedList();
const node1 = new Node(1);

LL.head = node1;

console.log(LL.head.val);