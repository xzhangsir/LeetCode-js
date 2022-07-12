/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 判断加1之后是不是0
var plusOne = function (digits) {
  let len = digits.length - 1

  for (let i = len; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10

    if (digits[i] !== 0) {
      return digits
    }
  }
  //if (digits[0] == 0) {
  digits.unshift(1)
  //}
  return digits
}
// @lc code=end
