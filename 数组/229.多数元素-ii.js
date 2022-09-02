/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 多数元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let obj = {},
    res = [],
    len = nums.length,
    compare = len / 3

  for (let i = 0; i < len; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }

  for (let [val, num] of Object.entries(obj)) {
    if (num > compare) {
      res.push(val)
    }
  }
  return res
}
// @lc code=end
