/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head
  }
  // 先计算链表的长度
  let len = 1
  let ring = head
  while (ring.next) {
    ring = ring.next
    len++
  }
  //此时 ring 已经到了链表的最后
  // 计算需要移动的次数
  let n = len - (k % len)
  if (n === len) return head
  //收尾相连 组成环状
  ring.next = head
  while (n) {
    // 不断移动 寻找尾部
    ring = ring.next
    n--
  }
  let res = ring.next
  //掐断尾部
  ring.next = null
  return res
}
// @lc code=end
