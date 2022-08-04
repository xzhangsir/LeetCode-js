/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/([^a-zA-Z0-9])/g, '').toLocaleLowerCase()
  let left = 0,
    right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    } else {
      left++
      right--
    }
  }
  return true
}
// @lc code=end
