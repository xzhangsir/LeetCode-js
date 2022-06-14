/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const valueSymbols = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  let num = 0,
    len = s.length
  for (let i = 0; i < len; i++) {
    let val = valueSymbols[s[i]]
    if (i < len - 1 && val > valueSymbols[s[i + 1]]) {
      num -= val
    } else {
      num += val
    }
  }
  return num
}
// @lc code=end
