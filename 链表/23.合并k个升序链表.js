/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let res = null
  // res 和list中的每一项去排序
  for (let i = 0; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i])
  }
  return res
}

var mergeTwoLists = function (list1, list2) {
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
}

// @lc code=end
