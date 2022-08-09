/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let setNum = new Set(nums)
  let res = 0

  for (let num of setNum) {
    if (!setNum.has(num - 1)) {
      let cur = num
      while (setNum.has(cur + 1)) {
        cur += 1
      }

      res = Math.max(res, cur - num + 1)
    }
  }

  return res
}
// @lc code=end
