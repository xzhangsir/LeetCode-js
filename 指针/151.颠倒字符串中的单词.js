/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let start = 0,
    next = 0
  let len = s.length
  let src = ''
  s = s + ' '
  while (next <= len) {
    if (s[next] === ' ') {
      if (start === next) {
        start = ++next
        continue
      }
      src = s.slice(start, next) + ' ' + src

      start = ++next
    } else {
      next++
    }
  }
  return src.trim()
}
// @lc code=end
