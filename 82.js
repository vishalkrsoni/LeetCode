class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeGivenNode(head, node) {
  if (head === node) {
    return head.next;
  }
  let curr = head;
  while (curr !== null) {
    if (curr.next === node) {
      curr.next = node.next;
      break;
    }
    curr = curr.next;
  }
  return head;
}

var deleteDuplicates = function (head) {
  const trackedNodes = new Set();
  let curr = head;
  let prev = null;
  while (curr !== null) {
    if (trackedNodes.has(curr.val)) {
      prev.next = curr.next;
    } else {
      trackedNodes.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

const node1 = new ListNode(3);
const node2 = new ListNode(3, node1);
const node3 = new ListNode(2, node2);
const node4 = new ListNode(1, node3);
const node5 = new ListNode(1, node4);
// const node6 = new ListNode(8, node5);
// const node7 = new ListNode(1, node6);

const newHead = deleteDuplicates(node5);

console.log(newHead);
