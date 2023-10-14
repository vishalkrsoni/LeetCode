class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  toJSONString() {
    const jsonArr = [];
    let current = this.head;
    while (current) {
      jsonArr.push(current.value);
      current = current.next;
    }
    return JSON.stringify(jsonArr, null, 2);
  }
}
const createLinkedList = (head, ...rest) => {
  const linkedList = new LinkedList();

  if (head !== undefined) {
    linkedList.append(head);
  }

  for (const value of rest) {
    linkedList.append(value);
  }

  return linkedList;
};

const l1 = createLinkedList(1, 3, 5, 6);
const l2 = createLinkedList(1, 5, 7, 13);

// console.log(l1.toJSONString());
// console.log(l2.toJSONString());

const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  for (let i = 1; i < lists.length; i++) {
    lists[0] = mergeTwoLists(lists[0], lists[i]);
  }
  return lists[0];
};

const finalMergedList = mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);


console.log(finalMergedList)