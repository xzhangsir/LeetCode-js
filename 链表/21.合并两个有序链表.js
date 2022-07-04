/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/* var mergeTwoLists = function (list1, list2) {
  // 先建立一个新链表，然后遍历比较这两个链表的值
  let link = new ListNode()
  let newlink = link
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      newlink.next = list2
      list2 = list2.next
    } else {
      newlink.next = list1
      list1 = list1.next
    }
    newlink = newlink.next
  }
  //最后判断哪个链表的还有剩余，直接连接在新链表即可
  newlink.next = list1 ? list1 : list2
  return link.next
} */

// 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
// @lc code=end
