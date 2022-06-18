/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//从低位高位一次相乘
var multiply = function (num1, num2) {
  let res = 0
  let len1 = num1.length - 1
  let len2 = num2.length - 1
  for (let i = len1; i >= 0; i--) {
    let carry = 0
    let cols = 0
    for (let j = len2; j >= 0; j--) {
      let jdx = 10 ** (len2 - j)
      cols = (cols % jdx) + num1[i] * num2[j] * jdx + carry * jdx
      carry = parseInt(cols / (jdx * 10))
    }
    let idx = 10 ** (len1 - i)
    res += cols * idx
  }
  return res + ''
}
// @lc code=end
