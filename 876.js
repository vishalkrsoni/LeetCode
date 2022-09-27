class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtEnd = (value) => {
    let current;
    let node = new Node(value);
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next != null) current = current.next;
      current.next = node;
    }
    this.size++;
  }

  insertAtStart = (value) => {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  printLL = () => {
    let current = this.head;
    while (current != null) {
      console.log(current.value)
      current = current.next
    }
    console.log(current);
  }

  insertAt = (value, pos) => {
    let node = new Node(value);
    let current = this.head;
    let ctr = 1;
    while (ctr != (pos - 1)) {
      current = current.next;
      ctr += 1;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
  }

  getIndex = (value) => {
    let ctr = 0;
    let current = this.head;
    while (current.value != value) {
      current = current.next
      ctr += 1;
    }
    console.log(`${current.value} is at index ${ctr}`);
  }
}

var middleNode = function (head) {
  let size = 0
  let curr = head
  while (curr != null) {
    curr = curr.next
    size++
  }
  let target = (size % 2 === 0) ? (size / 2) + 1 : (size + 1) / 2
  curr = head
  while (target > 1) {
    curr = curr.next
    target--
  }
  return curr
}

let list = new LinkedList()
list.insertAtEnd(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
list.insertAtEnd(6)
let hd = list.head

let list1 = new LinkedList()
list1.insertAtEnd(1)
list1.insertAtEnd(2)
list1.insertAtEnd(3)
list1.insertAtEnd(4)
list1.insertAtEnd(5)
let hd1 = list1.head

console.log(middleNode(hd))
console.log(middleNode(hd1))
