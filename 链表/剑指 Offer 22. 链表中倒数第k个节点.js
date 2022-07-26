/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let node = head,
    n = 0
  // 先计算链表的长度
  while (node) {
    node = node.next
    n++
  }
  node = head

  for (let i = 0; i < n - k; i++) {
    node = node.next
  }
  return node
}
