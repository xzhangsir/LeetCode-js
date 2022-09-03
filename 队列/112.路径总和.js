/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false
  }
  let queNode = [root]
  let queVal = [root.val]

  while (queNode.length > 0) {
    let node = queNode.shift()
    let val = queVal.shift()
    if (node.left == null && node.right == null) {
      if (val == targetSum) {
        return true
      }
      continue
    }
    if (node.left !== null) {
      queNode.push(node.left)
      queVal.push(node.left.val + val)
    }
    if (node.right !== null) {
      queNode.push(node.right)
      queVal.push(node.right.val + val)
    }
  }
  return false
}
// @lc code=end
