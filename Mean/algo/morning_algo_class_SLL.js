class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(val) {
        var newNode = new Node(val);
        this.tail.next = newNode
        this.tail = this.tail.next
        // create a new node with a value of "val" parameter
        // add new node to the end of the queue list
        // assign the new node (which is now the last node in the list) as this.tail
    }

    dequeue() {
        this.head = this.head.next;
        // remove the front node from the list
        // re-assign this.head to the next node now in line (which is the new front)
    }

    front() {
        if (this.head == null){
            return null;
        }
        else{
            return this.value;
        }
        // return the value of the head node
        // if there is no head node, return null;
    }

    isEmpty(){
        if(this.head == null){
            return true;
        }
        else{
            return false;
        }
        // if there is no head node, return true
        // else return false
    }
    contains(val){
        while(this.head !== null){
            if(this.head.value == val){
                return true;
            }
            else{
                this.head.dequeue();
            }
        }
        return false;
        // traverse thru the queue and find a node with a value equal to "val" parameter
        // REMEMBER: you can ONLY SEE the head node, aka this.front() at any given time. Use your built-in methods to check the front node, remove it, and then check the new front until you find the right value
        // if you find the value, return true
        // else, return false
    }
    size(){
        var count = 0
        while(this.head !== null){
            count++
            this.head.dequeue();
        }
        return count;
    }
    // SLQueue: Size
    // Create SLQueue method size() that returns the number of values in our queue.

    removeMinimums(){
        var min = 0
        while(this.head !== null){
            if(this.head.value < this.head.next.value){
                this.head = min
            }
            else if()
        }
    }
    // SLQueue: Remove Minimums
    // Create a standalone function to remove an SLQueue’s lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.
}