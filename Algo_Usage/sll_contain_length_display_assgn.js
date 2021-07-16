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
    contains(value){
        var runner = this.head;
        while(runner != null) {
            if(value == runner.val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length(){
        var runner = this.head;
        var count = 0;
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }
    display(){
        var runner = this.head;
        var str = "";
        while(runner != null){
            str = str + runner.value + " "; 
            runner = runner.next;
        }
        return str;
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

console.log(sll1.contains(12));
console.log(sll1.contains(33));
console.log(sll1.length());
console.log(sll1.display()); //note that this str = str + runner.value + " "; as .'value' is the value used above not 'var'


// boilerplate sll runner
var runner = this.head;
while(runner != null){
    //console.log(i);
    runner = runner.next;
}