/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路： 遍历遇到 0  添加到数组的首位
//           遇到 1  不动
//           遇到 2  添加到数组的尾部
var sortColors = function (nums) {
  let len = nums.length
  let tailPushTotal = 0 //尾部push的次数
  for (let i = 0; i < len - tailPushTotal; ) {
    if (nums[i] === 0) {
      nums.unshift(nums.splice(i, 1))
      i++
    } else if (nums[i] == 2) {
      nums.push(2)
      nums.splice(i, 1)
      tailPushTotal++
    } else if (nums[i] == 1) {
      i++
    }
  }
  return nums
}
// @lc code=end
