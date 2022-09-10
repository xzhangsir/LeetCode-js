/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function (nums) {
  let left = 0
  let right = 0
  let len = nums.length
  while (right < len) {
    if (nums[right] != 0) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
}
// @lc code=end
