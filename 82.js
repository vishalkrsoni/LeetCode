class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var deleteDuplicates = function (head) {
  const trackedNodes = new Set();
  console.log(trackedNodes)
};
// 1 2 3 3 4 4 5
const node1 = new ListNode(5);
const node2 = new ListNode(7, node1);
const node3 = new ListNode(4, node2);
const node4 = new ListNode(3, node3);
const node5 = new ListNode(8, node4);
const node6 = new ListNode(8, node5);
const node7 = new ListNode(1, node6);

const newHead = deleteDuplicates(node7);

console.log(newHead);
