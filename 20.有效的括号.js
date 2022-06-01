/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let dic = { '(': 1, '[': 2, '{': 3, ')': -1, ']': -2, '}': -3 }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] + dic[s.charAt(i)] === 0) {
      stack.pop()
    } else {
      if (dic[s.charAt(i)] < 0) {
        return false
      }
      stack.push(dic[s.charAt(i)])
    }
  }
  return stack.length === 0
}
// @lc code=end
