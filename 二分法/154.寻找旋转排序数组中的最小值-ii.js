/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
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
    let center = parseInt((left + right) / 2)

    if (nums[center] < nums[right]) {
      right = center
    } else if (nums[center] > nums[right]) {
      left = center + 1
    } else {
      right--
    }
  }
  return nums[left]
}
// @lc code=end
