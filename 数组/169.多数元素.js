/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {},
    len = nums.length

  for (let i = 0; i < len; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
    if (obj[nums[i]] > len / 2) {
      return nums[i]
    }
  }
}
// @lc code=end
