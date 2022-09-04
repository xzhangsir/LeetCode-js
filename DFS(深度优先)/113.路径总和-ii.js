/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
// 递归+深度优先
var pathSum = function (root, targetSum) {
  let res = []
  let path = []
  dfs(root, targetSum, path, res)
  return res
}
var dfs = function (root, targetSum, path, res) {
  if (!root) return
  path.push(root.val)
  if (root.left === null && root.right === null && root.val === targetSum) {
    res.push([...path])
  }
  dfs(root.left, targetSum - root.val, path, res)
  dfs(root.right, targetSum - root.val, path, res)
  path.pop()
}
// @lc code=end
