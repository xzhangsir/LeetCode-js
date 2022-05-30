/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 最后一位和最前的一位去比较
var isPalindrome = function (x) {
  if (x < 0) return false
  let leftZero = 1
  while (x / leftZero >= 10) {
    leftZero *= 10
  }
  while (leftZero >= 10) {
    if (x % 10 === parseInt(x / leftZero)) {
      x = ((x % leftZero) - (x % 10)) / 10
      leftZero /= 100
    } else {
      return false
    }
  }
  return true
}
// @lc code=end
