/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  let L = -1,
    R = -1
  if (target < nums[0] || target > nums[right]) {
    return [-1, -1]
  }

  while (left <= right) {
    let center = parseInt((left + right) / 2)
    if (nums[center] === target) {
      L = center
      right = center - 1
    } else if (target < nums[center]) {
      right = center - 1
    } else {
      left = center + 1
    }
  }
  if (L === -1) return [-1, -1]

  left = 0
  right = nums.length - 1
  while (left <= right) {
    let center = parseInt((left + right + 1) / 2)
    if (nums[center] === target) {
      R = center
      left = center + 1
    } else if (target < nums[center]) {
      right = center - 1
    } else {
      left = center + 1
    }
  }
  return [L, R]
}
// @lc code=end
