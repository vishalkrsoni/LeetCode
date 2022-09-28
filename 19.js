var removeNthFromEnd = function (head, n) {
  let list = new ListNode(0);
  list.next = head;
  let fast = list;
  let slow = list;
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return list.next;
};