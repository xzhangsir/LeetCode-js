/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希集合
/* var missingNumber = function (nums) {
  let len = nums.length
  let obj = {}
  for (let i = 0; i < len; i++) {
    obj[nums[i]] = 1
  }
  for (let i = 0; i <= len; i++) {
    if (!obj[i]) {
      return i
    }
  }
} */
// 高斯公式
/* var missingNumber = function (nums) {
  let len = nums.length
  let total = Math.floor(((len + 1) * len) / 2)
  let arrTotal = 0
  for (let i = 0; i < len; i++) {
    arrTotal += nums[i]
  }
  return total - arrTotal
}
 */
// 排序
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return len
}
// @lc code=end
