class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        const head = null;
        const tail = null;
    }

    addToHead(val) {
        const newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
            return newHead;
        }
        newHead.next = this.head;
        this.head = newHead;
        return newHead;
    }

    addToTail(val) {
        const newTail = new Node(val);
        if (!this.head) {
            this.head = newTail;
            this.tail = newTail;
            return newTail;
        }
        this.tail.next = newTail;
        this.tail = newTail;
        return newTail;
    }

    removeHead() {
        if (this.head) {
            const oldHead = this.head;
            this.head = this.head.next;
            return oldHead;
        }
    }
}

const ll = new LinkedList();
console.log(ll.removeHead());