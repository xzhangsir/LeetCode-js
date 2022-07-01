/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
//二分法
var mySqrt = function (x) {
  let left = 0,
    right = x,
    res = null
  while (left <= right) {
    let center = parseInt((right + left) / 2)
    if (center * center <= x) {
      res = center
      left = center + 1
    } else if (center * center > x) {
      right = center - 1
    }
  }
  return res
}
// @lc code=end
