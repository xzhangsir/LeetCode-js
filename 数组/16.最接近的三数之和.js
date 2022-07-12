/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let len = nums.length,
    left = null,
    right = null,
    current = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < len; i++) {
    left = i + 1
    right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(target - sum) < Math.abs(target - current)) {
        current = sum
      }
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else if (sum == target) {
        return current
      }
    }
  }
  return current
}
// @lc code=end
