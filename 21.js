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
let l1 = new LinkedList()
let l2 = new LinkedList()
l1.insert(1)
l1.insert(2)
l1.insert(4)
l2.insert(1)
l2.insert(3)


var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.value < list2.value) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
console.log(mergeTwoLists(l1, l2))