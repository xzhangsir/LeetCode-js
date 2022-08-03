/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = []
  let nums = []
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i)
    if (cur == ')') {
      if (res.length && res[res.length - 1].val == '(') {
        let temp = res.pop()
        nums.push(temp.i, i)
      }
    } else {
      res.push({
        val: cur,
        i
      })
    }
  }
  nums.sort((a, b) => a - b)
  let max = 0
  let left = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      max = Math.max(max, i + 1 - left)
      left = i + 1
    }
  }
  if (left < nums.length) {
    max = Math.max(max, nums.length - left)
  }
  return max
}
// @lc code=end
