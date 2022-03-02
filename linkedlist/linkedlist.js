class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(head, tail) {
        this.head = null;
    }

    addToHead(headVal) {
        const newHead = new Node(headVal);
        newHead.next = this.head;
        this.head = newHead;
    }

    addToTail(tailVal) {
        const newTail = new Node(tailVal);
        if (!this.head) {
            this.head = newTail;
            return newTail;
        } 
        let current = this.head;
        while(current) {
            current = current.next;
        }
        current.next = newTail;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    
}

const LL = new LinkedList();
console.log(LL); //undef
LL.addToHead(3)
LL.addToHead(2)
LL.addToHead(1)
console.log(LL);
LL.print();