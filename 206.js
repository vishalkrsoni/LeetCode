class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertatEnd(val) {
    let cur;
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
    }
    else {
      cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
  }
  insertatBeg(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  printLL() {
    let cur = this.head;
    while (cur != null) {
      console.log(cur.val)
      cur = cur.next
    }
    console.log(cur);
  }

  insertAt(val, pos) {
    let node = new Node(val);
    let cur = this.head;
    letctr = 1;
    while (ctr != (pos - 1)) {//false => ctr==(pos-1)
      cur = cur.next;
      ctr += 1;
    }

    node.next = cur.next;
    cur.next = node;
    this.size++;

  }

  indexof(val) {
    letctr = 0;
    let cur = this.head;
    while (cur.val != val) {
      cur = cur.next
      ctr += 1;
    }
    console.log(`${cur.val} is at index ${ctr}`);
  }
  length() {
    console.log(`size of the linked list is ${this.size}`);
  }
}

let LL1 = new LinkedList();
LL1.insertatEnd(1)
LL1.insertatEnd(2)
LL1.insertatEnd(3)
LL1.insertatEnd(4)
LL1.insertatEnd(5)

let LL2 = new LinkedList()
var reverseList = function (head) {
  let curr = head, next, prev = null;
  if (head == null) return `Empty List`
  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev
  return head
};
console.log(reverseList(LL1.head))
