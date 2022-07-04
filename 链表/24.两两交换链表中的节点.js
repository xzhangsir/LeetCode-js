/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let newHead = new ListNode(0)
  newHead.next = head

  let temp = newHead

  while (temp.next != null && temp.next.next != null) {
    // 先保存后面相邻的两个节点
    let node1 = temp.next
    let node2 = temp.next.next
    // temp -> node1 -> node2  三个节点交换
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return newHead.next
}
// @lc code=end
