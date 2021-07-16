//Task is Write a method to return the value (not the node) at the head of 
//the list. If the list is empty, return null.
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
}

sll1 = new SLL()
node1 = new Node(8)
node2 = new Node(12)

sll1.head = node1; //starts the linked list with 'head'
node1.next = node2; //this connects the nodes