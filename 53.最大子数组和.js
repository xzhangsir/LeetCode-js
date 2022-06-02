/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let tempMaxSum = 0,
    maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    //子数组计算和最大值
    tempMaxSum = Math.max(tempMaxSum + nums[i], nums[i])
    //最终的最大值
    maxSum = Math.max(tempMaxSum, maxSum)
  }
  return maxSum
}
// @lc code=end
