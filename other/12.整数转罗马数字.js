/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

//  高位逐减
var intToRoman = function (num) {
  const valueSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let res = ''
  for (let key in valueSymbols) {
    while (num >= valueSymbols[key]) {
      res += key
      num = num - valueSymbols[key]
    }
    if (num == 0) {
      break
    }
  }
  return res
}
// @lc code=end
