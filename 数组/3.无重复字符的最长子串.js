/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0
  let res = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    while (res.includes(s[i])) {
      res.shift()
    }
    res.push(s[i])
    max = Math.max(max, res.length)
  }
  return max
}
// @lc code=end
