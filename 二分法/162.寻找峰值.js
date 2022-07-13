/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分法
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1

  while (left < right) {
    let center = parseInt((left + right) / 2)
    //  只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
    if (nums[center] < nums[center + 1]) {
      left = center + 1
    } else {
      right = center
    }
  }
  return left
}
// @lc code=end
