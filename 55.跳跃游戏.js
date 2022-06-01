/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length
  if (len <= 1) return true
  if (nums[0] === 0) return false

  let max_index = 0 //初始化当前能到达最远的位置

  for (let i = 0; i < len; i++) {
    //如果当前位置能到达，并且当前位置+跳数>最远位置
    if (max_index >= i && i + nums[i] > max_index) {
      //更新最远能到达位置
      max_index = i + nums[i]
    }
  }
  return max_index >= len - 1
}
// @lc code=end
