/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法
var search = function (nums, target) {
  let len = nums.length
  if (len === 0) return 0
  if (len === 1) {
    return target == nums[0] ? 0 : -1
  }

  let left = 0
  let right = len - 1

  while (left <= right) {
    let center = parseInt((left + right) / 2)

    if (nums[center] === target) return center

    if (nums[0] <= nums[center]) {
      if (nums[0] <= target && nums[center] >= target) {
        right = center - 1
      } else {
        left = center + 1
      }
    } else {
      if (target >= nums[center] && target <= nums[len - 1]) {
        left = center + 1
      } else {
        right = center - 1
      }
    }
  }
  return -1
}
// @lc code=end
