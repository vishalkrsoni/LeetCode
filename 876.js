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

  insert = (value) => {
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

  printList = () => {
    let current = this.head;
    let nodes = []
    while (current != null) {
      nodes.push(current.value)
      current = current.next
    }
    console.log(nodes);
  }

  insertStart = (value, pos) => {
    let node = new Node(value);
    if (pos == 0 || pos == undefined) {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
    else {
      let current = this.head;
      while (pos > 1) {
        current = current.next;
        pos--
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
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
list.insert(1)
list.insert(2)
list.insert(38)
list.insert(64)
list.insert(65)
list.insert(69)
list.insertStart(22, 0)
list.insertStart(666)
list.insertStart(76, 1)
list.insertStart(66, 1)
let hd = list.head
list.printList()
list.getIndex(64)

console.log(middleNode(hd))
