/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let strLen = strs.length
  if (strLen == 0) return ''
  if (strLen == 1) return strs[0]

  let minLenStr = ''
  //先找出数组中最短的字符串
  for (let i = 0; i < strLen - 1; i++) {
    if (strs[i].length > strs[i + 1].length) {
      minLenStr = strs[i + 1]
    } else {
      minLenStr = strs[i]
    }
  }

  // 用最短的和其余挨个比较
  for (let i = 0; i < minLenStr.length; i++) {
    for (let j = 0; j < strLen; j++) {
      if (minLenStr[i] !== strs[j][i]) {
        return minLenStr.slice(0, i)
      }
    }
  }
  return minLenStr
}
// @lc code=end
