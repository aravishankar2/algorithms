/*
    [22] -> [2] -> [77] -> [6] -> [76] -> [89]
    head                                  tail 
*/

// Nodes are pieces of data - value
// They have a reference to next node - next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("Arun");
list.push("Jimmy");
list.push("Timmy");
list.push("Colt");
list.push("Johnny");
list.push("Tommy");
list.push("Simmy");
list.push("Colbert");

console.log(list.traverse());
