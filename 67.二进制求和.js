/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let n = Math.max(a.length, b.length)
  let res = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    let a1 = a.length - 1 < i ? 0 : a[a.length - i - 1] * 1
    let b1 = b.length - 1 < i ? 0 : b[b.length - i - 1] * 1
    let sum = a1 + b1 + res[n - i]
    res[n - i] = sum % 2
    res[n - i - 1] = parseInt(sum / 2)
  }
  while (res[0] == 0 && res.length > n) {
    res.shift()
  }

  return res.join('')
}
// @lc code=end
