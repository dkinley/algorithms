// Write a method to remove the head node and return the new list head node. 
// If the list is empty, return null.

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

sll1 = new SLL()
node1 = new Node(8)
node2 = new Node(12)

sll1.head = node1; //starts the linked list with 'head'
node1.next = node2; //this connects the nodes

sll1.removeFront();