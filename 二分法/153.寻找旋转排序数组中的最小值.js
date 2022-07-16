/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1

  while (left < right) {
    let center = parseInt(left + (right - left) / 2)

    if (nums[center] > nums[right]) {
      left = center + 1
    } else {
      right = center
    }
  }
  return nums[left]
}
// @lc code=end
