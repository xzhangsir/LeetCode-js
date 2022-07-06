/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// 先层级遍历(广度优先搜索) 再算深度
/**
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let res = []
  // 队列中放每一层的
  let queue = [root]

  while (queue.length > 0) {
    let len = queue.length
    let temp = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.val) {
        temp.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(temp)
  }
  return res.length
}
*/

//深度优先搜索
var maxDepth = function (root) {
  if (root) {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  } else {
    return 0
  }
}
// @lc code=end
