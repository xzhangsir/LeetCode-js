/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先排序 再用双指针
  nums.sort((a, b) => a - b)
  let len = nums.length,
    left = null,
    right = null,
    res = []
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break // nums[i]大于 0，三数之和必然无法等于 0，结束循环
    if (nums[i] == nums[i - 1]) continue // 去重
    left = i + 1
    right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] == nums[left + 1]) left++ // 去重
        while (left < right && nums[right] == nums[right - 1]) right-- // 去重
        left++
        right--
      }
    }
  }
  return res
}
// @lc code=end
