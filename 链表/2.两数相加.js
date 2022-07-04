/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 链表
var addTwoNumbers = function (l1, l2) {
  //先声明需要返回的链表的头和尾
  let head = null,
    tail = null
  // 前一步有没有进位
  let carry = 0
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    let sum = n1 + n2 + carry
    carry = parseInt(sum / 10)
    //开始创建新的链表
    if (head) {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    } else {
      head = new ListNode(sum % 10)
      tail = head
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  //此时如果 还有进位值
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
}
// @lc code=end
