/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let totalAll = []
  while (n != 1) {
    // 有可能是个环
    if (totalAll.includes(n)) {
      return false
    } else {
      totalAll.push(n)
    }
    n = getNext(n)
  }
  return true
}
var getNext = function (src) {
  src = src + ''
  let total = 0
  for (let i = 0; i < src.length; i++) {
    total += src[i] ** 2
  }
  return total
}
// @lc code=end
