/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 先中序遍历 再找到错误的节点 最后两个节点交换
var recoverTree = function (root) {
  let list = []
  inorderTraversal(root, list)
  //找到错误交换的两个节点  N1和N2
  let N1 = null,
    N2 = null
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].val > list[i + 1].val) {
      N2 = list[i + 1]
      if (N1 === null) {
        N1 = list[i]
      } else {
        break
      }
    }
  }
  // 两个错误的节点交换
  ;[N1.val, N2.val] = [N2.val, N1.val]
}
//中序遍历
var inorderTraversal = function (node, list) {
  if (node === null) {
    return
  }
  inorderTraversal(node.left, list)
  list.push(node)
  inorderTraversal(node.right, list)
}

// @lc code=end
