/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n

  let n_1 = 0,
    n_2 = 0,
    res = 1
  for (let i = 2; i <= n; i++) {
    n_2 = n_1
    n_1 = res
    res = (n_1 + n_2) % 1000000007
  }
  return res

  /*  var fibnacci = (n) => {
    if (n === 0) return [0, 1]
    return (([a, b]) => [b, (a + b) % 1000000007])(fibnacci(n - 1))
  }
  return fibnacci(n)[0] */
}
// @lc code=end
