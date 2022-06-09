/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 都为空的 相同
  if (p == null && q == null) {
    return true
  }
  // 一个为空，一个非空，显然不同
  if (p == null || q == null) {
    return false
  }
  // 两个都非空，但 val 不一样也不行
  if (p.val != q.val) {
    return false
  }
  // 先比较左边 再比较右边
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
