/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针
var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let cur = head.next
  head.next = null
  let temp = null
  while (cur) {
    temp = cur.next
    cur.next = head
    head = cur
    cur = temp
  }
  return head
}
