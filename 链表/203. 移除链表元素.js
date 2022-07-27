/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var dummyNode = new ListNode(-1) // 设置一个虚拟头节点
  dummyNode.next = head
  let node = dummyNode
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return dummyNode.next
}
