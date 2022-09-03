/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 快速幂
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let result = 1
  while (n) {
    //判断 n 的二进制最后一位是否是 1， 如果是 1 则将结果乘以 x
    if (n % 2) result *= x
    x *= x
    n >>>= 1 //无符号左移
  }

  return result
}
// @lc code=end
