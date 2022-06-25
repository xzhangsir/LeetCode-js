/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function (s) {
  let len = s.length
  if (len <= 1) {
    return s
  }
  let left = 0
  let right = 0
  let maxLen = 0
  let maxStart = 0
  let currentLen = 1

  for (let i = 1; i < len; i++) {
    left = i - 1
    right = i + 1

    while (s.charAt(i) === s.charAt(left)) {
      left--
      currentLen++
    }
    while (right < len && s.charAt(i) === s.charAt(right)) {
      right++
      currentLen++
    }
    while (left >= 0 && right <= len && s.charAt(left) === s.charAt(right)) {
      left--
      right++
      currentLen += 2
    }
    if (currentLen > maxLen) {
      maxLen = currentLen
      maxStart = left
    }
    currentLen = 1
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1)
}
// @lc code=end
