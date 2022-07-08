/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 二叉搜索树的中序遍历是升序序列
// 中序遍历，总是选择中间位置左边的数字作为根节点
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null
  return func(nums, 0, nums.length - 1)
}
var func = function (nums, left, right) {
  if (left > right) return null
  let center = Math.floor((left + right) / 2)
  let res = new TreeNode(nums[center])
  if (left === right) return res
  res.left = func(nums, left, center - 1)
  res.right = func(nums, center + 1, right)
  return res
}

// @lc code=end
