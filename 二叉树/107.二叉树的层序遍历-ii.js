/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
// 广度优先遍历 (bfs)
var levelOrderBottom = function (root) {
  if (root === null) return []
  let queue = [root]
  let res = []
  while (queue.length > 0) {
    let len = queue.length
    let temp = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.unshift(temp)
  }
  return res
}
// @lc code=end
