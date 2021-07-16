// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    front() {
        if (this.head == null){
            return null
        }
        return this.head.val;
    }
    removeFront() {
        if (this.head == null){
            return null
        }
        this.head = this.head.next;
        return this.head;
    }
    addFront(value){
        var newerNode = new Node(value);
        newerNode.next = this.head;
        this.head = newerNode;
        return this.head;
    }

}

sll1 = new SLL()
node1 = new Node(8)
node2 = new Node(12)

sll1.head = node1; //starts the linked list with 'head'
node1.next = node2; //this connects the nodes

sll1.removeFront();
sll1.addFront(3);
console.log(sll1);
sll1.front();